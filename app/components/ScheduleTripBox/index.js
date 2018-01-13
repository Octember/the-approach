/**
*
* ScheduleTripComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GuideCard from 'components/GuideCard';

const TripBoxBorderDiv = styled.div`
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

function ScheduleTripBox(props) {
  return (
    <TripBoxBorderDiv className={`d-flex flex-column px-4 py-2 ${props.className}`}>
      <h4 className="mb-1">{'Climb with'}</h4>
      <GuideCard />
      <Link to="/offer"><button type="button" className="btn btn-primary btn-block">Do it</button></Link>
    </TripBoxBorderDiv>
  );
}

ScheduleTripBox.propTypes = {
  price: PropTypes.string,
  duration: PropTypes.string,
  className: PropTypes.string,
}; // TODO something needed forscheduling link

export default ScheduleTripBox;
