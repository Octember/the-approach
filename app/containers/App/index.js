/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RouteReviewPage from 'containers/RouteReviewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RoutePage from 'containers/RoutePage/Loadable';
import RouteListPage from 'containers/RouteListPage/Loadable';
import OfferListPage from 'containers/OfferListPage/Loadable';
import OfferDetailPage from 'containers/OfferDetailPage/Loadable';


export default function App() {
  return (
    <div>
      <div>
        <ul>
          <li><Link to="/route">Route</Link></li>
          <li><Link to="/routelist">route list</Link></li>
          <li><Link to="/offerlist">offer list </Link></li>
          <li><Link to="/offer">offer </Link></li>
        </ul>

        <hr />
      </div>
      <Switch>
        <Route exact path="/" component={RoutePage} />
        <Route path="/form" component={RouteReviewPage} />
        <Route path="/route/:routeId" component={RoutePage} />
        <Route path="/routelist" component={RouteListPage} />
        <Route path="/offerlist" component={OfferListPage} />
        <Route path="/offer" component={OfferDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
