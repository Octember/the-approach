/**
 *
 * Breadcrumbs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const BreadcrumbOl = styled.ol `
  background-color: inherit
`;

const BreadcrumbLi = styled.li `
  // font-size: 12px
`;

function Breadcrumbs(props) {
  return (
    <div className="row font-weight-light">
      <nav aria-label="breadcrumb" role="navigation">
        <BreadcrumbOl className="breadcrumb py-0 my-0">
          {
            props.breadcrumbData.map((linkData, index) => (
              <BreadcrumbLi className="breadcrumb-item active" key={index}>
                {/*<a href={linkData.link}>*/}
                  {linkData.text}
                {/*</a>*/}
              </BreadcrumbLi>
            ))
          }
        </BreadcrumbOl>
      </nav>
    </div>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
};

export default Breadcrumbs;
