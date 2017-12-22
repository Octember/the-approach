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
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {
          props.carouselEntries.map((carouselEntry, i) => {
            const className = i === 0 ? 'active' : '';

            return (
              <li data-target="#carouselExampleIndicators" data-slide-to={i} className={className} key={i} />
            );
          })
        }
      </ol>
      <div className="carousel-inner" role="listbox">
        {
          props.carouselEntries.map((carouselEntry, i) =>
            <CarouselEntry {...carouselEntry} index={i} key={`item-${i}`} />
          )
        }
      </div>
    </div>
  );
}

LocationCarousel.propTypes = {
  carouselEntries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired,
};

// Default props. Probably delete this once we have a real API
LocationCarousel.defaultProps = {
  carouselEntries: [
    {
      title: 'Picnic Lunch Wall',
      subtitle: 'subtitle 1',
      imageUrl: 'https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509',
    },
    {
      title: 'title 2',
      subtitle: 'subtitle 2',
      imageUrl: 'http://www.backgroundbandit.com/wallpapers/31/700.jpg',
    },
  ],
};


export default LocationCarousel;
