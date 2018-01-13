/**
*
* TripReportCard
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import StyledSmall from 'components/shared/StyledSmall';

import moment from 'moment';
const UserImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: fill;
`;

function TripReportCard(props) {
  const date = moment(props.review.created).format('MMM. Do, YYYY');

  return (
    <div className="py-1">
      <div className="d-flex flex-row">
        <UserImage
          className="img-block rounded-circle mx-2"
          src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/7/0f/70f48a4f-cdf6-5674-8d6e-ad5436d8de5e/52f999459e4cd.image.jpg"
        />

        <div className="flex-column mx-2">
          <p className="mb-0">Rob Caldwell</p>
          <p className="mb-0"><StyledSmall>{date}</StyledSmall></p>
        </div>

        <Stars className="mx-2" value={props.review.rating} />
      </div>

      <div className="pl-2">
        <h6 className="font-weight-bold mt-1">{props.review.title}</h6>
        <p>
          <StyledSmall>
            {props.review.reviewText}
          </StyledSmall>
        </p>
      </div>
    </div>
  );
}

TripReportCard.propTypes = {
  review: PropTypes.object,
  images: PropTypes.array,
};

export default TripReportCard;
