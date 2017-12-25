/**
*
* LocationTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import PageTitle from 'components/shared/PageTitle'

function LocationTitle(props) {
  return (
    <PageTitle className={props.className}>
      {props.title}
      { props.rating ? <Stars className="d-inline-block pl-2" value={5.0} editable={false} /> : <div />}
    </PageTitle>
  );
}

LocationTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default LocationTitle;
