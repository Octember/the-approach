/**
 *
 * shared/LinkImageCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GrayImageOverlay from 'components/shared/GrayImageOverlay';

const StyledCard = styled.div.attrs({
  className: (props) => 'card border-0 mb-3 ' + (props.className || ' '),
})`
  background-color: deepskyblue;
  width:100%;

  ${
    (props) => {
      if(props.image.url) {  // Maybe we could check that image URL is good / image is successfully loaded?
        return 'background-image: url(' + props.image.url + ');'
          + 'background-size: cover;';
      }
      else {
        // Final fall-back: bluish gradient background
        return 'background-image: linear-gradient(-165deg, white, deepskyblue, darkblue);';
      }
    }
  }

  box-shadow: 2px 6px 8px 2px rgba(0, 0, 0, 0.2);
  & > a { color: white; }
`;

const LinkImageCard = (props) => {
  return (
    <StyledCard className={props.className} image={props.image}>
      <Link to={props.linkUrl}>
        <GrayImageOverlay />
        {props.children}
      </Link>
    </StyledCard>
  )
}

LinkImageCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
};

export default LinkImageCard;
