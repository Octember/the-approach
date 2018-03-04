/**
 *
 * GearListCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkImageCard from 'components/shared/LinkImageCard';
import GrayImageOverlay from 'components/shared/GrayImageOverlay';

const ContainerForCardShape = styled.div`
  width: 100%;
  height: 8rem;
`;

const StyledNameOverLinkImage = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

function GearListCard(props) {
  return (
    <div className="d-flex flex-row mb-3">
      <LinkImageCard className={props.className} image={props.image} linkUrl={`/gearlist/${props.id}`}>
        <ContainerForCardShape>
          <StyledNameOverLinkImage>{props.name || 'Required Gear'}</StyledNameOverLinkImage>
        </ContainerForCardShape>
      </LinkImageCard>
    </div>
  );
}

GearListCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  image: PropTypes.object,
};

export default GearListCard;
