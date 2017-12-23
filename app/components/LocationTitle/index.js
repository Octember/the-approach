/**
*
* LocationTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from 'components/Stars';

const StyledTitle = styled.h1 `
  font-family: Raleway;
  font-weight: 800;
  font-style: normal;
`;


function LocationTitle(props) {
  return (
    <StyledTitle className={props.className}>
      {props.title}
      { props.rating ? <Stars className="d-inline-block pl-2" value={5.0} editable={false} /> : <div />}
    </StyledTitle>
  );
}

LocationTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default LocationTitle;
