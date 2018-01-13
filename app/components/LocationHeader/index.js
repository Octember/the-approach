/**
*
* LocationTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import PageTitle from 'components/shared/PageTitle';

const LocationHeader = (props) => (
  <div className="text-left px-2 w-100">
    <PageTitle className="mb-0 mr-4">
      {props.title}
      { props.rating ? <Stars className="d-inline-block pl-2" value={props.rating} editable={false} /> : <div />}
    </PageTitle>
  </div>
);

LocationHeader.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default LocationHeader;
