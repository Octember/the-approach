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
    <nav aria-label="breadcrumb" role="navigation" className={props.className}>
      <BreadcrumbOl className="breadcrumb p-0 my-0 font-weight-light">
        {
          props.breadcrumbData.map((linkData, index) => (
            <BreadcrumbLi className="breadcrumb-item active" key={index}>
              {/*<a href={linkData.link}>*/}
              <small>{linkData.text}</small>
              {/*</a>*/}
            </BreadcrumbLi>
          ))
        }
      </BreadcrumbOl>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;
