import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselImage = styled.img `
  height: 300px;  
`;

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
        <CarouselImage
          className="w-100"
          src={props.url}
          alt="First slide"
        />
        <CarouselOverlayFadeDiv className="position-absolute w-100 h-100" />
      </div>

      <CarouselSpacer className="w-100" />
    </div>
  );
}

CarouselEntry.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default CarouselEntry;
