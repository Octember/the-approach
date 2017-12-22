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

function Header() {
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light bg-fafafa pb-0">
      <a className="navbar-brand" href="#">
        <h4 className="pl-4 mb-0">theApproach</h4>
      </a>

    </StyledNav>
  );
}

Header.propTypes = {

};

export default Header;
