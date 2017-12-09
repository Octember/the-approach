/**
*
* PageSection
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  return (
    <div className="row py-2">
      <div className="col" />

      <div className="col-md-8 border border-secondary border-left-0 border-right-0 border-top-0">
        <h2>{props.title}</h2>

        <div className="ml-2">
          {props.children}
        </div>
      </div>

      <div className="col" />
    </div>
  );
}

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageSection;
