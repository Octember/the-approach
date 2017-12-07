import styled from 'styled-components';
import React from 'react';

const CarouselCaption = (props) => (
  <div className="carousel-caption">
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
  </div>
);

const StyledCarouselCaption = styled(CarouselCaption)`
  left: 0px;
  right: 0px;
  width: 100%;
  color: palevioletred;
  font-weight: bold;
`;

export default StyledCarouselCaption;
