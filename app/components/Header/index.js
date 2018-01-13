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
    <div className="row pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-inverse text-white">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='locationlist'>Location List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='offerlist'>Offer List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='form'>Submit Review</Link>
            </li>
          </ul>

        </div>
      </div>
      <nav className="navbar navbar-toggleable-xs navbar-light bg-white px-0 pb-0 w-100">
        <StyledNavButton className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                         aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </StyledNavButton>
        <Link className="navbar-brand mr-auto ml-2 font-weight-bold" to="/">theApproach</Link>
      </nav>
    </div>
  );
}


Header.propTypes = {};

export default Header;
