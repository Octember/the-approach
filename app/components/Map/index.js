/**
*
* Map
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Map extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <iframe
		  width="100%"
		  height="300px"
		  frameBorder="0"
		  style= {{ border: 0 }}
		  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCcvbFOuTajIZLoMaym3ctSVJ6zSL111Nk&q=Space+Needle,Seattle+WA"
		  allowFullScreen>
		</iframe>
    );
  }
}

Map.propTypes = {

};

export default Map;
