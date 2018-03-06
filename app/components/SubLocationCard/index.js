/**
 *
 * SubTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkImageCard from 'components/shared/LinkImageCard';
import Icon from 'components/shared/Icon';

// Extends Icon component's styles for use in this component
const SubLocationIcon = styled(Icon).attrs({
  className: 'mx-2',
})``;

const SubLocationCard = (props) => (
  <LinkImageCard className={props.className} image={props.image} linkUrl={`/location/${props.location.id}`}>
    <div className="position-relative p-1">
      <h3 className="pl-2">
        {props.location.title}
      </h3>
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
  </LinkImageCard>
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
