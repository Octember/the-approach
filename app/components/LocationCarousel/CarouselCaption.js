import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import LocationTitle from 'components/LocationTitle';

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const StyledMetadata = styled.small `
  font-weight: 300;
`;

const CarouselCaption = (props) => (
  <StyledCarouselCaptionDiv className="carousel-caption text-left px-3 w-100">
    <LocationTitle title={props.title} rating={5.0} className="mb-0" />
    {
      props.metadata.map((subtitle, i) =>
        <p key={`item-${i}`} className="mb-1">
          <StyledMetadata>{subtitle}</StyledMetadata>
        </p>
      )
    }
  </StyledCarouselCaptionDiv>
);


CarouselCaption.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
};

export default CarouselCaption;
