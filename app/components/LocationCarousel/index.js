/**
*
* Carousel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselEntry from './CarouselEntry';
import CarouselCaption from './CarouselCaption'

const CarouselWrapper = styled.div `
  height: 350px;
`;


function LocationCarousel(props) {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100">
        <CarouselCaption title={props.title} metadata={props.metadata} />
      </div>

      <CarouselWrapper id="locationCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators mb-1 mx-2 justify-content-start">
          {
            props.images.map((carouselEntry, i) => {
              const className = i === 0 ? 'active' : '';

              return (
                <li data-target="#locationCarousel" data-slide-to={i} className={className} key={carouselEntry.id} />
              );
            })
          }
        </ol>
        <div className="carousel-inner" role="listbox">
          {
            props.images.map((images, i) =>
              <CarouselEntry {...images} index={i} key={images.id} />
            )
          }
        </div>
      </CarouselWrapper>

    </div>
  );
}

LocationCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default LocationCarousel;
