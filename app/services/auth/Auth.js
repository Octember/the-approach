import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-config';
import history from './history';

export default class Auth {
  tokenRenewalTimeout;

  constructor() {
    this.webAuth = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      responseType: 'token id_token', // token is the access-token passed to the API, id_token is a JWT with user info
      audience: 'approach-server', // The ID of the API in auth0
      scope: 'openid profile write:review', // The list of "scopes" we're requesting permission for.
      // As new permissions come up we need to add them here, likely conditionally
      // nonce: '' We can use nonce to prevent attacks here
    });

    this.scheduleTokenRenewal();
  }

  passwordLogin = (user, pass) => {
    this.webAuth.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username: user,
      password: pass,
      scope: 'openid',
    }, (err, authResult) => {
      // Auth tokens in the result or an error
      console.log("Auth finished");
      console.log(err);
      console.log(authResult);
    });
  };

  loginFacebook = () => {
    this.webAuth.authorize({
      connection: 'facebook',
    });
  };

  loginGoogle = () => {
    this.webAuth.authorize({
      connection: 'google-oauth2',
    });
  };

  handleAuthentication = () => {
    // Add a callback for Lock's `authenticated` event
    // this.lock.on('authenticated', this.setSession.bind(this));
    // // Add a callback for Lock's `authorization_error` event
    // this.lock.on('authorization_error', (err) => {
    //   console.log(err);
    //   alert(`Error: ${err.error}. Check the console for further details.`);
    //   history.goBack();
    // });
    this.webAuth.parseHash({ hash: window.location.hash }, this.handleAuthenticationResult);
  };

  handleAuthenticationResult = (err, authResult) => {
    if (err) {
      console.log(err);
      // TODO: Redirect back somewhere correct if we came from an SSO and failed somehow
      // Facebook in particular
    } else {
      this.setSession(authResult);
    }
  };

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      const scopes = authResult.scope || this.requestedScopes || '';
      localStorage.setItem('scopes', JSON.stringify(scopes));

      // schedule a token renewal
      this.scheduleTokenRenewal();

      // Go back to wherever we came from
      history.goBack();
    }
  }

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    clearTimeout(this.tokenRenewalTimeout);

    // Reload current page
    history.go(history.location);
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  userHasScope = (scope) => {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return grantedScopes.includes(scope);
  }

  renewToken = () => {
    console.log("Renewing token...")
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setSession(result);
      }
    });
  }

  scheduleTokenRenewal = () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  }
}
