import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselImage = styled.img `
  height: 300px;
  object-fit: cover;
`;

function CarouselEntryDesktop(props) {
  const className = props.index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <div className={className}>
      <div className="position-relative">
        <CarouselImage
          className="w-100"
          src={props.url}
          alt="First slide"
        />
      </div>
    </div>
  );
}

CarouselEntryDesktop.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default CarouselEntryDesktop;
