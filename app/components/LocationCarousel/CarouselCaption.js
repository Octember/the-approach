import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 200px;
`;

const CarouselCaption = (props) => (
  <StyledCarouselCaptionDiv className="carousel-caption text-left pl-2">
    <h3 className="font-weight-bold">{props.title}</h3>
    <p>{props.subtitle}</p>
  </StyledCarouselCaptionDiv>
);


CarouselCaption.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CarouselCaption;
