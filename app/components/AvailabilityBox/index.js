/**
 *
 * Availability
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {} from 'react-intl';

const StyledAvailabilityScheduleButton = styled.button`
  width: 150px;

`;

const AvailabilityBox = (props) => (
  <div className={`d-flex flex-column ${props.className}`}>
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column">
        <div className="btn btn-default py-2">1 spot left</div>

        <h4 className="pl-2">
          {'July 22-23'}
        </h4>
      </div>

      <StyledAvailabilityScheduleButton
        type="button"
        className="btn btn-primary btn-block rounded-0"
      >
        Schedule
      </StyledAvailabilityScheduleButton>
    </div>

    <div className="d-flex flex-row">
      <h4 className="ml-4 mb-0">
        {'1395 per person'}
      </h4>
    </div>
  </div>
);

AvailabilityBox.propTypes = {
  location: PropTypes.object,
  className: PropTypes.string,
};


export default AvailabilityBox;

