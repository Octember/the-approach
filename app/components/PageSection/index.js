/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  return (
    <div className="container px-0">
      <div className="row py-2">
        <div className="col" />

        <div className="col-md-8">
          <h2 className="font-weight-bold">{props.title}</h2>
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
