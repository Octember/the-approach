import styled from 'styled-components';
import React from 'react';

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  background-color: gray;
  opacity: 0.9;
`;

const CarouselCaption = (props) => (
  <StyledCarouselCaptionDiv className="carousel-caption">
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
  </StyledCarouselCaptionDiv>
);

export default CarouselCaption;
