/**
*
* Carousel
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import CarouselImage from './CarouselImage';
import StyledCarouselCaption from './CarouselCaption';

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <CarouselImage
            className="d-block img-fluid"
            src="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509"
            alt="First slide"
          />
          <StyledCarouselCaption title="testing 123" subtitle="subtitle test"/>
        </div>
        <div className="carousel-item">
          <CarouselImage
            className="d-block img-fluid"
            src="http://www.backgroundbandit.com/wallpapers/31/700.jpg"
            alt="First slide"
          />
          <StyledCarouselCaption title="testing 123" subtitle="subtitle test"/>
        </div>
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

};

export default Carousel;
