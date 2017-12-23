/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import {} from 'react-intl';

const StyledNav = styled.nav `
  width: 100%;
`;

// TODO this is very hacky. beware
const StyledNavButton = styled.button `
  border-color: rgba(0,0,0,0) !important; 
`;

function Header() {
  return (
    <StyledNav className="navbar navbar-toggleable-xs navbar-light bg-fafafa pb-0">

      <StyledNavButton className="navbar-toggler navbar-toggler-left btn-link" type="button" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </StyledNavButton>
      <a className="navbar-brand mr-auto ml-2" href="#"> theApproach</a>
    </StyledNav>
  );
}

Header.propTypes = {

};

export default Header;
