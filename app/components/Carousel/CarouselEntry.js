import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import CarouselCaption from './CarouselCaption';
import CarouselImage from './CarouselImage';

function CarouselEntry(props) {
  console.log(props)
  let className = props.index == 0 ? "carousel-item active" : "carousel-item"

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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string
};

export default CarouselEntry;
