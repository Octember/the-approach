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
          <h4 className="font-weight-bold">{props.title}</h4>
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
