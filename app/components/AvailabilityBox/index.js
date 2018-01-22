/**
*
* Availability
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledSmall from 'components/shared/StyledSmall';
import PageTitle from 'components/shared/PageTitle';
import moment from 'moment';
import {} from 'react-intl';

const AvailabilityHeader = styled.h2 `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 1em;
`;

const AvailabilityInfo = styled.ul `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 0.75em;
`;

const AvailiblityBox = (props) => {
  console.log(props.image)
  return (
    <div className={`d-flex flex-column {props.className}`}>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <button className="btn btn-default py-2">1 spot left</button>

          <AvailabilityHeader>
            <div className = "pl-2">
              {'July 22-23'}
            </div>
          </AvailabilityHeader>
        </div>
        <div className="d-flex flex-column">
          <button type="button" className="btn btn-primary btn-block py-2">Schedule</button>
        </div>
      </div>


      <div className="d-flex flex-row">
        <AvailabilityHeader>
          <div className="pl-3">
            {'1395 per person'}
          </div>
        </AvailabilityHeader>
      </div>  
  </div>
  );
};

AvailiblityBox.propTypes = {
  location: PropTypes.object,
  image: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
  className: PropTypes.string,
};


export default AvailiblityBox;

