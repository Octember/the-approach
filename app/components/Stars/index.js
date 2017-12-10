/**
*
* Stars
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

function Stars(props) {
  return (
    <ReactStars
      count={5}
      value={props.value}
      size={25}
      edit={props.editable}
    />
  );
}

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool,
};

export default Stars;
