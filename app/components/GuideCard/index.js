/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {} from 'react-intl';
import { Link } from 'react-router-dom';

const GuideCardImage = styled.img `
  max-width: 50px;
  max-height: 50px;
`;


function GuideCard(props) {
  return (
    <div className={`d-flex flex-row ${props.className}`}>
      <GuideCardImage src={props.image} />
      <div className="d-flex flex-column pl-2">
        <div>{props.guideName}</div>
        <div><small>{props.location}</small></div>
      </div>
    </div>
  );
}

GuideCard.propTypes = {
  image: PropTypes.string,
  guideName: PropTypes.string,
  location: PropTypes.string,
};

GuideCard.defaultProps = {
  image: 'https://78.media.tumblr.com/avatar_9276c38f5939_128.png',
  guideName: 'Bob Caldwell',
  location: 'His friends call him Shrek',
};

export default GuideCard;
