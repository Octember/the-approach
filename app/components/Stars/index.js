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
  return (
    <div className="position-relative">
      <ReactStars
        count={5}
        value={props.value}
        size={props.size}
        edit={true}
        className={props.className}
        color1="lightgray"
      >
      </ReactStars>
      {/* Had to create a controllable overlay, because ReactStars doesn't update its state
          when passing a new value to its edit prop. */}
      <EditDisabledOverlay
        count={5}
        value={0}
        size={props.size}
        edit={false}
        className={"position-absolute " + (props.editable ? "d-none" : "d-block")}
        color1={"#F9F9F9" /* Same color as Select component's bg when disabled */}
      />
    </div>
  );
}

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  className: PropTypes.string,
};

Stars.defaultProps = {
  size: 20,
  editable: true,
}

export default Stars;
