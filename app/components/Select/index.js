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

const EditDisabledOverlay = styled(ReactSelect)`
  z-index: 2;
`

function Select(props) {
  return (
      <EditDisabledOverlay {...props} />
  );
}

export default Select;
