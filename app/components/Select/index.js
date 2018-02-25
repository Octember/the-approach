/**
*
* Select
*
* This adds a z-index to the Select component so it appears above the half stars from the ReactStars component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

const StyledSelect = styled(ReactSelect)`
  z-index: 2;
`

function Select(props) {
  return (
      <StyledSelect {...props} />
  );
}

export default Select;
