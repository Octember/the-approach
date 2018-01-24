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

const LocationImage = styled.img`
  width: 100%;
  height: 128px;
  object-fit: fill;
`;

const SubTitleHeader = styled.h2 `
  color: white;
`;

const SubLocationMetadata = styled.ul `
  color: white;
`;

// Extends Icon component's styles for use in this component
const SubLocationIcon = styled(Icon).attrs({
  className: 'mx-2',
})``;

const CardBorderDiv = styled.div`
    box-shadow: 2px 6px 8px 2px rgba(0, 0, 0, 0.2);
`;

const SubLocationCard = (props) => (
  <div className={props.className}> {/* Wrapper class to apply className from props */}
    <Link to={`/location/${props.location.id}`}>
      <CardBorderDiv className="position-relative">
        <GrayImageOverlay className="position-absolute px-2 w-100 h-100 ">
          <div>
            <SubTitleHeader className="mt-4 mb-0">
              {props.location.title}
            </SubTitleHeader>
          </div>
          <div>
            <SubLocationMetadata className="list-unstyled">
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
            </SubLocationMetadata>
          </div>
        </GrayImageOverlay>

        <LocationImage
          className="img-fluid"
          src={props.image.url}
        />
      </CardBorderDiv>
    </Link>
  </div>
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

