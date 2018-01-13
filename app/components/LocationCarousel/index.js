/**
*
* Carousel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LocationHeader from 'components/LocationHeader';
import CarouselEntry from './CarouselEntry';

const CarouselWrapper = styled.div `
  height: 350px;
`;

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

function LocationCarousel(props) {
  return (
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
  );
}

LocationCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

const LocationCarouselWithHeading = (props) => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 ">
        <StyledCarouselCaptionDiv className="carousel-caption pb-4">
          <LocationHeader title={props.title} rating={props.rating} />
        </StyledCarouselCaptionDiv>
      </div>
      <LocationCarousel images={props.images} />
    </div>
  );
};

LocationCarouselWithHeading.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  rating: PropTypes.number,
};


export {
  LocationCarousel,
  LocationCarouselWithHeading,
};

