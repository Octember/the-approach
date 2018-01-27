/**
 *
 * Guide Description Card
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import StyledSmall from 'components/Shared/StyledSmall';

import {} from 'react-intl';
import { Link } from 'react-router-dom';

const GuideDescriptionCardImage = styled.img `
  max-width: 50px;
  max-height: 50px;
`;


function GuideDescriptionCard(props) {
  return (
    <div>
      <div className={`d-flex flex-row ${props.className}`}>
        <GuideDescriptionCardImage src={props.image} />
        <div className="d-flex flex-column pl-2">
          <div>{props.guideName}</div>
          <div className="row mb-2">
            <Stars
              className="pl-3"
              value={5.0}
              editable={false}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row pl-3">
        <StyledSmall>
          {props.aboutInfo}
        </StyledSmall>
      </div>
    </div>
  );
}

GuideDescriptionCard.propTypes = {
  image: PropTypes.string,
  guideName: PropTypes.string,
  aboutInfo: PropTypes.string,
  className: PropTypes.string,
};

GuideDescriptionCard.defaultProps = {
  image: 'http://travelchair.com/images/blockexpeditions.png',
  guideName: 'Error reading guideName',
  aboutInfo: 'Getting safely up and down mountains is just the beginning of the story at Rainier Mountaineering, Inc. (RMI). Founded by the legendary Lou Whittaker and staffed by the most experienced and talented guides in America, RMI has built a four-decade long legacy of safe, successful, and enjoyable mountaineering adventures.',
};

export default GuideDescriptionCard;
