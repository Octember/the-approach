/**
 *
 * GearListCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GrayImageOverlay from 'components/shared/GrayImageOverlay';

const ConstrainedImgBySize = styled.img`
  width: 100%;
  height: 8rem;
`;

const StyledNameOverLinkImage = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0.5rem;
`;

function GearListCard(props) {
  return (
    <div className="d-flex flex-row mb-3">
      <Link to={`/gearlist/${props.gearListObj.id}`} className="position-relative w-100">
        <ConstrainedImgBySize src={props.gearListObj.imageUrl} alt={props.gearListObj.name}/>
        <GrayImageOverlay />
        <StyledNameOverLinkImage className="text-light">{props.gearListObj.name}</StyledNameOverLinkImage>
      </Link>
    </div>
  );
}

GearListCard.propTypes = {
  gearListObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default GearListCard;
