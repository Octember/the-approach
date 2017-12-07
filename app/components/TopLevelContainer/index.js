/**
*
* TopLevelContainer
*
*/

import React from 'react';
import styled from 'styled-components';


const StyledTopLevelContainerDiv = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`

function TopLevelContainer(props) {
  return (
    <StyledTopLevelContainerDiv className="container">
      {props.children}
    </StyledTopLevelContainerDiv>
  );
}

export default TopLevelContainer;
