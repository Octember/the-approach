/**
*
* Carousel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselEntry from './CarouselEntry';

function LocationCarousel(props) {
  return (
    <div id="locationCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators mb-1 mx-2 justify-content-start">
        {
          props.carouselEntries.map((carouselEntry, i) => {
            const className = i === 0 ? 'active' : '';

            return (
              <li data-target="#locationCarousel" data-slide-to={i} className={className} key={carouselEntry.id} />
            );
          })
        }
      </ol>
      <div className="carousel-inner" role="listbox">
        {
          props.carouselEntries.map((carouselEntry, i) =>
            <CarouselEntry {...carouselEntry} index={i} key={carouselEntry.id} />
          )
        }
      </div>
    </div>
  );
}

LocationCarousel.propTypes = {
  carouselEntries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    metadata: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default LocationCarousel;
