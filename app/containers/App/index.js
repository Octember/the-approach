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
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RouteReviewPage from 'containers/RouteReviewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RoutePage from 'containers/RoutePage/Loadable';
import RouteListPage from 'containers/RouteListPage/Loadable';
import OfferListPage from 'containers/OfferListPage/Loadable';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/form" component={RouteReviewPage} />
        <Route path="/route" component={RoutePage} />
        <Route path="/routelist" component={RouteListPage} />
        <Route path="/offerlist" component={OfferListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
