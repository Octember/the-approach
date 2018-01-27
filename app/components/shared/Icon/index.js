/*
  Icon Component

Element: <img>
Props:
  symbol  -> Required; must match a key in images object (or an empty box will appear) (devs, add images as needed)
  width   -> Default: 16px; needs to be CSS-style format (e.g., 20px, 1em)
  height  -> Default: 16px; needs to be CSS-style format (e.g., 20px, 1em)
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Image files must be statically loaded
import map_pin from './../../../images/icon-map_pin-16x16.png';
import grade from './../../../images/icon-grade-16x16.png';
import clock from './../../../images/icon-clock-16x16.png';

// Put image data in object so symbol prop can be used as key
const images = {
  map_pin: map_pin,
  grade: grade,
  clock: clock,
};

// Styled-component for incorporating dynamic props given on Icon component
const SpecifiedIcon = styled.img.attrs({
  src: (props) => images[props.symbol],
})
`
  width: ${(props) => { return props.width || '16px' }};
  height: ${(props) => { return props.height || '16px' }};
`;

function Icon(props) {
  return (
    <SpecifiedIcon
      className={props.className}
      symbol={props.symbol}
      width={props.width}
      height={props.height}
    />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Icon;
