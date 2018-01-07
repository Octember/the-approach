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
      size={16}
      edit={props.editable}
      className={props.className}
    />
  );
}

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  className: PropTypes.string,
};

export default Stars;
