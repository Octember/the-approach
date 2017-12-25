/**
 *
 * GuideHero
 *
 */

import React from 'react';
import styled from 'styled-components';

import Stars from 'components/Stars';

const GUIDE_ICON_WIDTH = 60;
const GUIDE_SPACER_WIDTH = 90;

const RelativePostionDiv = styled.div `
  position: relative;
  margin-bottom: ${GUIDE_SPACER_WIDTH / 2}px;
`;

const HeroBackgroundImageContainer = styled.div `
  overflow: hidden;
  max-height: 200px;
`;

const HeroBackgroundImage = styled.img `
  object-fit: cover;
`;

const GuideLogoContainer = styled.div `
  position: absolute;
  bottom: -${GUIDE_SPACER_WIDTH / 2}px;
  width: ${GUIDE_SPACER_WIDTH}px;
  height: ${GUIDE_SPACER_WIDTH}px;
  background-color: #fafafa;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
`;

const GuideLogo = styled.img `
  position: absolute;
  top: ${(GUIDE_SPACER_WIDTH - GUIDE_ICON_WIDTH) / 2}px;
  left: ${(GUIDE_SPACER_WIDTH - GUIDE_ICON_WIDTH) / 2}px;
  max-width: ${GUIDE_ICON_WIDTH}px;
  max-width: ${GUIDE_ICON_WIDTH}px;
`;


function GuideHero() {
  return (
    <div>
      <RelativePostionDiv>
        <HeroBackgroundImageContainer>
          <HeroBackgroundImage
            className="d-block img-fluid"
            src="https://www.outdoorproject.com/sites/default/files/styles/odp_header_adaptive/public/features/1-21.jpg?itok=YEd1AijH"/>
        </HeroBackgroundImageContainer>

        <GuideLogoContainer className="mx-auto rounded-circle">
          <GuideLogo
            className="img-fluid mx-auto my-auto"
            src="http://travelchair.com/images/blockexpeditions.png"
          />
        </GuideLogoContainer>
      </RelativePostionDiv>

      <div className="row">
        <h4 className="mx-auto mb-1">
          RMI Expeditions
        </h4>
      </div>
      <div className="row">
        <small className="mx-auto mb-1">
          Winthrop, WA
        </small>
      </div>

      <div className="row mb-2">
        <Stars
          className="mx-auto"
          value={4.3}
          editable={false}
        />
      </div>
    </div>
  );
}

GuideHero.propTypes = {};

export default GuideHero;
