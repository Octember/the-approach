/**
*
* SubTitle
*<div class="container bg-overlay">
  <div class="row text-left">
    <h1>This is a beautiful background image</h1>
        <h4>You can just use the "<strong>.bg-overlay</strong>" class on any container/element,<br></br>
        and specify the image you want to use and its height.</h4>
        <br></br>
        <button type="button" class="btn btn-primary btn-lg">Get Started</button>
  </div>
</div>
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledSmall from 'components/shared/StyledSmall';

import moment from 'moment';

import LocationHeader from 'components/LocationHeader';
import SubTitleEntry from './SubTitleEntry';

const LocationImage = styled.img`
  width: 300px;
  height: 128px;
  object-fit: fill;
`;

function LocationSubTitleHelper(props) {
  return (
    <UserImage
            className="img-block"
            src={props.images.url}
          />
    );
}

LocationSubTitleHelper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

const LocationSubTitle = (props) => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 ">
        <StyledSubTitleCaptionDiv className="SubTitle-caption pb-4">
          <LocationHeader title={props.title} metadata={props.metadata} rating={props.rating} />
        </StyledSubTitleCaptionDiv>
      </div>
      <LocationSubTitleHelper images={props.images} />
    </div>
  );
};

LocationSubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  rating: PropTypes.number,
};


export {
  LocationSubTitle,
  LocationSubTitleWithHeading,
};

