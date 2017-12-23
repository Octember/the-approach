
import React from 'react';
import {} from 'react-intl';

import styled from 'styled-components';

// Clarify styling here w rob
const StyledBorderBottomDiv = styled.div ` 
  border-bottom-width: 2px !important;
  border-bottom-color: rgb(222,222,222) !important;
`;


function BorderBottomDiv(props) {
  return (
    <StyledBorderBottomDiv className={`border border-secondary border-left-0 border-right-0 border-top-0 ${props.className}`}>
      {props.children}
    </StyledBorderBottomDiv>
  );
}

export default BorderBottomDiv;
