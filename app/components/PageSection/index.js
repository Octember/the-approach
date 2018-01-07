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
    <div className="px-2 py-2">
      {title}
      <div className="px-1">
        {props.children}
      </div>
    </div>

  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageSection;
