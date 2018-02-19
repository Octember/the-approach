import React from 'react';
import Auth from 'services/auth/Auth';

class AuthCallback extends React.PureComponent {
  constructor(props) {
    super(props);

    const auth = new Auth();

    const handleAuthentication = (nextState, replace) => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
      }
    };

    handleAuthentication(props);
  }

  render() {
    return (
      <div>Callback thing</div>
    );
  }
}

export default AuthCallback;
