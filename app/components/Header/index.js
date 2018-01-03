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
  return(
    <div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-inverse text-white">
       <ul className="nav flex-column">
          <li className ="nav-item">
            <a className ="nav-link active" href='/'>Home</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link active" href='locationlist'>Location List</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link active" href='location/:1'>Location 1</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link active" href='offerlist'>Offer List</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link active" href='form'>Submit Review</a>
          </li>
      </ul>
        
      </div>
    </div>
    <nav className="navbar navbar-toggleable-xs navbar-light bg-fafafa pb-0 w-100">
      <StyledNavButton className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </StyledNavButton>
      <Link className="navbar-brand mr-auto ml-2" to="/"> theApproach</Link>
    </nav>
  </div>
  );
}


Header.propTypes = {};

export default Header;
