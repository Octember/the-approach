/**
 *
 * Slider
 *
 */

import React from 'react';
import Slider from 'react-slick';

import Card from './Card';

function CardSlider() {
  const sliderSettings = {
    className: 'slider',
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...sliderSettings}>
      <div><Card /></div>
      <div><Card /></div>
      <div><Card /></div>
      <div><Card /></div>
    </Slider>
  );
}

CardSlider.propTypes = {};

export default CardSlider;
