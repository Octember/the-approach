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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Map from 'components/Map';
import TileList from 'components/TileList';
import ClickableTile from 'components/ClickableTile';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    let data = [
      {
        id: 1,
        title: 'First tile',
        image: 'https://www.mountainlodgesofperu.com/2017/files/sll-contenido-columna-2017.png',
        link: 'test idk'
      },
      {
        id: 2,
        title: 'Second tile',
        link: 'test idk',
        image: 'https://cdn-files.apstatic.com/climb/106597038_medium_1494123647.jpg'
      },
      {
        id: 3,
        title: 'third tile',
        link: 'test idk',
        image: 'https://cdn-files.apstatic.com/climb/106597038_medium_1494123647.jpg'
      }
    ];

    return (
      <div className="container">
        <div className="row">
          <FormattedMessage {...messages.header} />

          {/*<Map />*/}

          <TileList component={ClickableTile} items={data} />

          <TileList component={ClickableTile} items={data} />
        </div>
      </div>
    );
  }
}
