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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const data = [
      {
        id: 1,
        title: 'First tile',
        image: 'https://www.mountainlodgesofperu.com/2017/files/sll-contenido-columna-2017.png',
        link: 'test idk',
      },
      {
        id: 2,
        title: 'Second tile',
        link: 'test idk',
        image: 'https://cdn-files.apstatic.com/climb/106597038_medium_1494123647.jpg',
      },
      {
        id: 3,
        title: 'third tile',
        link: 'test idk',
        image: 'https://cdn-files.apstatic.com/climb/106597038_medium_1494123647.jpg',
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

        </PageSection>

      </div>
    );
  }
}
