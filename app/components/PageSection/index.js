/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function PageSection(props) {
  const borderClass = props.noBorder ? '' : 'border border-secondary border-left-0 border-right-0 border-top-0';
  const marginClass = props.noMargin ? '' : 'ml-2';

  return (
    <div className="container px-0">
      <div className="row py-2">
        <div className="col" />

        <div className="col-md-8">
          <h2>{props.title}</h2>

          <div className={`${marginClass} ${borderClass}`}>
            {props.children}
          </div>
        </div>

        <div className="col" />
      </div>
    </div>
  );
}

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  noBorder: PropTypes.bool,
  noMargin: PropTypes.bool,
  children: PropTypes.node,
};

export default PageSection;
