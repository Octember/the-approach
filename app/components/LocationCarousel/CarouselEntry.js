import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselCaption from './CarouselCaption';

const CarouselImage = styled.img`
  width: 100%;
`;

const CarouselSpacer = styled.div `
  width: 100%;
  height: 100px;
  background-color: black;
`;

const RelativeDiv = styled.div `
  position: relative;
`;

const CarouselOverlayFadeDiv = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom,rgba(0,0,0, 0) 40%, rgba(0,0,0,1)); 
`;

function CarouselEntry(props) {
  const className = props.index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <div className={className}>
      <RelativeDiv>
        <CarouselImage
          className="d-block img-fluid"
          src={props.imageUrl}
          alt="First slide"
        />
        <CarouselOverlayFadeDiv />
      </RelativeDiv>

      <CarouselSpacer />
      <CarouselCaption title={props.title} subtitle={props.subtitle} />
    </div>
  );
}

CarouselEntry.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselEntry;
