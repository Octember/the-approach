/**
*
* PageSection
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  return (
    <div className="row">
      <h2 className="ml-2">{props.title}</h2>
      <div className="col-md-12">
        <div className="ml-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default PageSection;
