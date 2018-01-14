/**
*
* Carousel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LocationHeader from 'components/LocationHeader';
import CarouselEntryMobile from './CarouselEntryMobile';
import CarouselEntryDesktop from './CarouselEntryDesktop';

const CarouselWrapperMobile = styled.div`
  height: 350px;
`;

const CarouselWrapperDesktop = styled.div`
  height: 300px;
`;

const StyledCarouselCaptionDiv = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

function LocationCarouselDesktop(props) {
  return (
    <CarouselWrapperDesktop id="locationCarouselDesktop" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner" role="listbox">
        {
          props.images.map((images, i) =>
            <CarouselEntryDesktop {...images} index={i} key={images.id} />
          )
        }
      </div>
      <ol className="carousel-indicators mb-1 mx-2 justify-content-start">
        {
          props.images.map((carouselEntry, i) => {
            const className = i === 0 ? 'active' : '';

            return (
              <li data-target="#locationCarouselDesktop" data-slide-to={i} className={className} key={carouselEntry.id} />
            );
          })
        }
      </ol>
    </CarouselWrapperDesktop>
  );
}

LocationCarouselDesktop.defaultProps = {
  desktopView: false,
};

LocationCarouselDesktop.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  desktopView: PropTypes.bool,
};

const LocationCarouselMobile = (props) => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 ">
        <StyledCarouselCaptionDiv className="carousel-caption pb-4">
          <LocationHeader title={props.title} rating={props.rating} className="mx-2"/>
        </StyledCarouselCaptionDiv>
      </div>
      <CarouselWrapperMobile id="locationCarouselMobile" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators mb-1 mx-2 justify-content-start">
          {
            props.images.map((carouselEntry, i) => {
              const className = i === 0 ? 'active' : '';

              return (
                <li data-target="#locationCarouselMobile" data-slide-to={i} className={className} key={carouselEntry.id} />
              );
            })
          }
        </ol>
        <div className="carousel-inner" role="listbox">
          {
            props.images.map((images, i) =>
              <CarouselEntryMobile {...images} index={i} key={images.id} />
            )
          }
        </div>
      </CarouselWrapperMobile>
    </div>
  );
};

LocationCarouselMobile.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  rating: PropTypes.number,
};


export {
  LocationCarouselDesktop,
  LocationCarouselMobile,
};

