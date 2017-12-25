/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import {} from 'react-intl';

// TODO this is very hacky. beware
const StyledNavButton = styled.button `
  border-color: rgba(0,0,0,0) !important; 
`;

function Header() {
  return (
    <div className="row">
      <nav className="navbar navbar-toggleable-xs navbar-light bg-fafafa pb-0 w-100">

        <StyledNavButton className="navbar-toggler navbar-toggler-left px-0" type="button" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </StyledNavButton>
        <a className="navbar-brand mr-auto ml-2" href="#"> theApproach</a>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
