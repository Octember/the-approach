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

import Header from 'components/Header';


import Breadcrumbs from 'components/Breadcrumbs'
import LocationTitle from 'components/LocationTitle'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const routeData = [
      {
        id: 32131231,
        routeName: 'Route 1',
        routeStats: {
          grade: '5.9',
          type: 'sport',
          length: '100\'',
          rating: 3.6,
          countRatings: 11,
        },
      },
      {
        id: 131111,
        routeName: 'Route 2',
        routeStats: {
          grade: '5.10a',
          type: 'lead',
          length: '75\'',
          rating: 5.0,
          countRatings: 14,
        },
      },
    ];

    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <Breadcrumbs breadcrumbData={[{ link: 'google.com', text: 'Denali National Park' }]} />

        <LocationTitle title="Eamon Glacier"/>

      </div>
    );
  }
}
