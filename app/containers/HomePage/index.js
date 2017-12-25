/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import RoutePage from 'containers/RoutePage/Loadable';
import RouteListPage from 'containers/RouteListPage/Loadable';
import OfferListPage from 'containers/OfferListPage/Loadable';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/route">Route</Link></li>
            <li><Link to="/routelist">route list</Link></li>
            <li><Link to="/offerlist">offer list </Link></li>

          </ul>

          <hr />

          <Route exact path="/route" component={RoutePage}/>
          <Route path="/routelist" component={RouteListPage}/>
          <Route path="/offerlist" component={OfferListPage} />

        </div>
      </Router>
    );
  }
}
