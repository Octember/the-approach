import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import LocationTitle from 'components/LocationTitle';
import StyledSmall from 'components/shared/StyledSmall'

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const CarouselCaption = (props) => (
  <StyledCarouselCaptionDiv className="carousel-caption">
    <div className="text-left px-3 w-100">
      <LocationTitle title={props.title} rating={5.0} className="mb-0 mr-4" />
      {
        props.metadata.map((subtitle, i) =>
          <p key={`item-${i}`} className="mb-1">
            <StyledSmall>{subtitle}</StyledSmall>
          </p>
        )
      }
    </div>
  </StyledCarouselCaptionDiv>
);


CarouselCaption.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
};

export default CarouselCaption;
