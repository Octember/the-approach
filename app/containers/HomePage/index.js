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
import Carousel from 'components/Carousel';
import PageSection from 'components/PageSection';
import RouteCard from 'components/RouteCard';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const routeData = [
      {
        id: 32131231,
        routeName: 'Route 1',
        routeStats: {
          grade: '5.9',
          type: 'sport', // could do custom validators here
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
          type: 'lead', // could do custom validators here
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
        Breadcrumbs here... TODO make component

        <div className="row">
          <div className="col" />
          <div className="col-md-8">
            <Carousel />
          </div>
          <div className="col" />
        </div>

        <PageSection title="Beta">

          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
        </PageSection>

        <PageSection title="Approach">
          <p> go to the route</p>
        </PageSection>


        <PageSection title="All Routes">
          {
            routeData.map((data, i) =>
              <RouteCard {...data} index={i} key={`item-${data.id}`} />
            )
          }
        </PageSection>

      </div>
    );
  }
}
