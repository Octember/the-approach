/**
*
* Carousel
*
*/

import React from 'react';

import CarouselEntry from './CarouselEntry';
import PropTypes from 'prop-types';

function Carousel(props) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        { 
          props.carouselEntries.map( (carouselEntry, i) => {
            return <CarouselEntry {...carouselEntry} index={i} key={i}/>
          })
        }
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

Carousel.propTypes = {
  carouselEntries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired
};

// Default props. Probably delete this once we have a real API
Carousel.defaultProps = {
  carouselEntries: [{
    title: "title 1",
    subtitle: "subtitle 1",
    imageUrl: "https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509"
  },
  {
    title: "title 2",
    subtitle: "subtitle 2",
    imageUrl: "http://www.backgroundbandit.com/wallpapers/31/700.jpg"
  }]
};


export default Carousel;
