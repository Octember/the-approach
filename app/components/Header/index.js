import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavModal from 'components/NavModal';

const StyledNavButton = styled.button`
  &&& {
    border-color: rgba(0,0,0,0);
  }
`;

function Header() {
  return (
    <div className="row pos-f-t">
      <NavModal />
      <nav className="navbar navbar-toggleable-xs navbar-light bg-white px-0 py-0 w-100">
        <StyledNavButton className="navbar-toggler" type="button" data-toggle="modal" data-target="#nav-modal"
                         aria-controls="nav-modal" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </StyledNavButton>
        <Link className="navbar-brand mr-auto ml-2 font-weight-bold" to="/">theApproach</Link>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
