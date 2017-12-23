import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselCaption from './CarouselCaption';

const CarouselImage = styled.img`
  width: 100%;
`;

function CarouselEntry(props) {
  const className = props.index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <div className={className}>
      <CarouselImage
        className="d-block img-fluid"
        src={props.imageUrl}
        alt="First slide"
      />
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
