/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import {} from 'react-intl';
import { Link } from 'react-router-dom';

const GuideCardImage = styled.img `
  max-width: 50px;
  max-height: 50px;
`;


function GuideCard(props) {
  return (
    <div className={`d-flex flex-row ${props.className}`}>
      <GuideCardImage src="https://78.media.tumblr.com/avatar_9276c38f5939_128.png" />
      <div className="d-flex flex-column pl-2 mb-2">
        <div>{'Rob Caldwell'}</div>
        <div><small>{'AMGA Mountain Guide (loves shrek)'}</small></div>
      </div>
    </div>
  );
}

GuideCard.propTypes = {};

export default GuideCard;
