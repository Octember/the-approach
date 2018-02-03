/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  const title = props.title ? <h4 className="font-weight-bold px-2">{props.title}</h4> : '';

  const className = props.className ? `py-2 ${props.className}` : 'py-2';
  return (
    <div className={className}>
      {title}
      <div>
        {props.children}
      </div>
    </div>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default PageSection;
