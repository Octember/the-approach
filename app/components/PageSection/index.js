/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  const title = props.title ? <h4 className="font-weight-bold">{props.title}</h4> : '';
  return (
    <div className="container px-0">
      <div className="row py-2">
        <div className="col" />

        <div className="col-md-8">
          {title}
          {props.children}
        </div>

        <div className="col" />
      </div>
    </div>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageSection;
