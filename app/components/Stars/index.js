/**
*
* Stars
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const EditDisabledOverlay = styled(ReactStars)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

function Stars(props) {
  // Remove Bootstrap display classes ("d-*") so there aren't conflicts with setting the overlay's display
  const classesWithoutDisplay = props.className ? props.className.replace(/\bd-\S+\s?/g, '').trim() : "";

  return (
    <div className="position-relative">
      <ReactStars
        count={5}
        value={props.value}
        size={props.size}
        edit={props.handleRatingChange ? true : false}
        className={props.className}
        color1="lightgray"
        onChange={ props.handleRatingChange ? (value) => props.handleRatingChange(props.target, value) : undefined}
      >
      </ReactStars>
      {/* Had to create a controllable overlay, because ReactStars doesn't update its state
          when passing a new value to its edit prop. */}
      <EditDisabledOverlay
        count={5}
        value={0}
        size={props.size}
        edit={false}

        className={
          ( (props.editable || !props.handleRatingChange) ? "d-none " : "d-block " ) + "position-absolute " + classesWithoutDisplay
        }
        color1={"#F9F9F9" /* Same color as Select component's bg when disabled */}
      />
    </div>
  );
}

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  className: PropTypes.string,
  handleRatingChange: PropTypes.func,
  target: PropTypes.string,
};

Stars.defaultProps = {
  size: 20,
  editable: false,
}

export default Stars;
