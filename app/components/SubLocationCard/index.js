/**
 *
 * SubTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GrayImageOverlay from 'components/shared/GrayImageOverlay';
import Icon from 'components/shared/Icon';

const StyledCard = styled.div.attrs({
  className: (props) => 'card border-0 mb-3 ' + (props.className || ' '),
})`
  background-color: deepskyblue;

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

// Extends Icon component's styles for use in this component
const SubLocationIcon = styled(Icon).attrs({
  className: 'mx-2',
})``;

const SubLocationCard = (props) => (
  <StyledCard className={props.className} image={props.image}>
    <Link to={`/location/${props.location.id}`}>
        <GrayImageOverlay />
        <div className="position-relative p-1">
          <div>
            <h3 className="pl-2">
              {props.location.title}
            </h3>
          </div>
          <div>
            <ul className="list-group list-unstyled">
              <li>
                <SubLocationIcon symbol="map_pin" />
                {props.location.regionName}
              </li>
              <li>
                <SubLocationIcon symbol="grade" />
                {'Grade: A+'}
              </li>
              <li>
                <SubLocationIcon symbol="clock" />
                {'Duration: 4 hours 20 minutes'}
              </li>
            </ul>
          </div>
        </div>
    </Link>
  </StyledCard>
);

SubLocationCard.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
  image: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};

export default SubLocationCard;
