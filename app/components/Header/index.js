import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavModal from 'components/NavModal';
import SignInModal from 'components/SignInModal';

/* .pos-f-t wasn't defined anywhere and had no effect, so added styles according to Bootstrap documentation's definition.
  This fixes the header to the top of the screen, even when scrolling. */
const NavBar = styled.div.attrs({
  className: 'navbar navbar-toggleable-xs navbar-light bg-white p-0 w-100',
})`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;  /* BS docs had variable here, keeping under 1050 makes sure it's under modal overlay */
`;

// Putting a lot of props into a styled-component makes it much easier to read them
const StyledNavButton = styled.button.attrs({
  className: 'navbar-toggler',
  type: 'button',
  'data-toggle': 'modal',
  'data-target': '#nav-modal',
  'aria-controls': 'nav-modal',
  'aria-expanded': 'false',
  'aria-label': 'Toggle navigation',
})`
  &&& {
    border-color: rgba(0,0,0,0);
  }
`;

const StyledSignInButton = styled.button.attrs({
  className: 'btn btn-link btn-sm h-100',
  type: 'button',
  'data-toggle': 'modal',
  'data-target': '#signin-modal',
})``;

function Header() {
  return (
    <div className="row">
      <NavBar>
        <StyledNavButton><span className="navbar-toggler-icon" /></StyledNavButton>
        <Link className="navbar-brand mr-auto ml-2 font-weight-bold" to="/">theApproach</Link>
        <StyledSignInButton>Sign In</StyledSignInButton>
      </NavBar>
      <SignInModal />
      <NavModal />
    </div>
  );
}

Header.propTypes = {};

export default Header;
