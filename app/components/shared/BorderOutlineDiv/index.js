
import React from 'react';
import {} from 'react-intl';

import PropTypes from 'prop-types';
import styled from 'styled-components';

// Clarify styling here w rob
const TripBoxBorderDiv = styled.div`
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;


function BorderOutlineDiv(props) {
  return (
    <TripBoxBorderDiv className={`{props.className}`}>
    	{props.children}
    </TripBoxBorderDiv>
  );
}

BorderOutlineDiv.propTypes = {
  className: PropTypes.string,
};

export default BorderOutlineDiv;
