/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import {} from 'react-intl';
import { Link } from 'react-router-dom';

// TODO this is very hacky. beware
const StyledNavButton = styled.button `
  border-color: rgba(0,0,0,0) !important; 
`;

function Header() {
  return (
    <div className="row">
      <nav className="navbar navbar-toggleable-xs navbar-light bg-fafafa pb-0 w-100">

        <StyledNavButton className="navbar-toggler navbar-toggler-right px-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </StyledNavButton>
        <Link className="navbar-brand mr-auto ml-2" to="/"> theApproach</Link>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
