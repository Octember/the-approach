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
              <li data-target="#locationCarousel" data-slide-to={i} className={className} key={i} />
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
    metadata: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
  })).isRequired,
};

// Default props. Probably delete this once we have a real API
LocationCarousel.defaultProps = {
  carouselEntries: [
    {
      title: 'Emmon-Winthrop Glacier',
      metadata: [
        'Alpine Grade II-IIII',
        'Elevation 14,410',
        '0.5 mile approach',
      ],
      imageUrl: 'http://www.backgroundbandit.com/wallpapers/31/700.jpg',
    },
    {
      title: 'Noah is cool',
      metadata: [
        'subtitle 2',
      ],
      imageUrl: 'https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509',
    },
    {
      title: 'test',
      metadata: [],
      imageUrl: 'http://media.apps.chicagotribune.com/maptiles/chicago-mask/11/523/759.png',
    }
  ],
};


export default LocationCarousel;
