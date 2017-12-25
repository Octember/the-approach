import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselCaption from './CarouselCaption';


const CarouselSpacer = styled.div `
  height: 50px;
  background-color: black;
`;

const CarouselOverlayFadeDiv = styled.div `
  top: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom,rgba(0,0,0, 0) 40%, rgba(0,0,0,1)); 
`;

function CarouselEntry(props) {
  const className = props.index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <div className={className}>
      <div className="position-relative">
        <img
          className="d-block img-fluid w-100"
          src={props.imageUrl}
          alt="First slide"
        />
        <CarouselOverlayFadeDiv className="position-absolute w-100 h-100" />
      </div>

      <CarouselSpacer className="w-100" />
      <CarouselCaption title={props.title} metadata={props.metadata} />
    </div>
  );
}

CarouselEntry.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselEntry;
