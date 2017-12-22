import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselCaption from './CarouselCaption';
import CarouselImage from './CarouselImage';

const CarouselEntryContainer = styled.div `

`;

function CarouselEntry(props) {
  const className = props.index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <CarouselEntryContainer className={className}>
      <CarouselImage
        className="d-block img-fluid"
        src={props.imageUrl}
        alt="First slide"
      />
      <CarouselCaption title={props.title} subtitle={props.subtitle} />
    </CarouselEntryContainer>
  );
}

CarouselEntry.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselEntry;
