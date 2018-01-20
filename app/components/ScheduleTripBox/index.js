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
      <GuideCard {...props.guide} className="mb-2" />
      <Link to={`${props.offer.url}`}>
        <button type="button" className="btn btn-primary btn-block py-2">Do it</button>
      </Link>
    </TripBoxBorderDiv>
  );
}

ScheduleTripBox.propTypes = {
  guide: PropTypes.shape({
    image: PropTypes.string,
    guideName: PropTypes.string,
    location: PropTypes.string,
  }),
  offer: PropTypes.shape({
    url: PropTypes.string,
    // price: PropTypes.string,
    // duration: PropTypes.string,
  }),

  className: PropTypes.string,
};

ScheduleTripBox.defaultProps = {
  offer: {
    url: '/offer/1',
  },
};

export default ScheduleTripBox;
