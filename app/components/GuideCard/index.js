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
`;


function GuideCard(props) {
  return (
    <div className={`row ${props.className}`}>
      <div className="col-xs-2">
        <GuideCardImage className="rounded-circle" src="https://78.media.tumblr.com/avatar_9276c38f5939_128.png" />
      </div>
      <div className="col">
        <div>{'Rob Caldwell'}</div>
        <div><small>{'AMGA Mountain Guide'}</small></div>
      </div>
    </div>
  );
}

GuideCard.propTypes = {};

export default GuideCard;
