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

import WriteReviewPage from 'containers/WriteReviewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LocationPage from 'containers/LocationPage/Loadable';
import LocationListPage from 'containers/LocationListPage/Loadable';
import OfferListPage from 'containers/OfferListPage/Loadable';
import TripDetailPage from 'containers/TripDetailPage/Loadable';
import GuideProfilePage from 'containers/GuideProfilePage/Loadable';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LocationPage} />
      <Route exact path="/form" component={WriteReviewPage} />
      <Route exact path="/location/:locationId" component={LocationPage} />
      <Route exact path="/locationlist" component={LocationListPage} />
      <Route exact path="/guide/:guideId" component={GuideProfilePage} />
      {/*<Route exact path="/offerlist" component={OfferListPage} />*/}
      <Route exact path="/trip/:tripId" component={TripDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
