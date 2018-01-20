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
  font-size: 1.5em;
`;

const AvailabilityInfo = styled.ul `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 0.75em;
`;

const AvailiblityBox = (props) => {
  console.log(props.image)
  return (
    <div>
      <div className="col-md-2">
        <button type="button" className="btn btn-primary btn-block py-2">1 spot left</button>
        <button type="button" className="btn btn-primary btn-block py-2">Schedule</button>
      </div>
      <AvailabilityHeader>
        <div className = "pl-2">
          {'July 22-23'}
        </div>
      </AvailabilityHeader>
      <AvailabilityHeader> 
        <div className = "pl-3">
          {'1395 per person'}
        </div>
      </AvailabilityHeader>
      </div>   
  );
};

AvailiblityBox.propTypes = {
  location: PropTypes.object,
  image: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
};


export default AvailiblityBox;

