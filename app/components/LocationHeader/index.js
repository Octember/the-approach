/**
*
* LocationTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import PageTitle from 'components/shared/PageTitle';
import StyledSmall from 'components/shared/StyledSmall';

const LocationHeader = (props) => (
  <div className="text-left px-2 w-100">
    <PageTitle className="mb-0 mr-4">
      {props.title}
      { props.rating ? <Stars className="d-inline-block pl-2" value={props.rating} editable={false} /> : <div />}
    </PageTitle>
    <div className="ml-4">
      {
        props.metadata.map((subtitle, i) =>
          <p key={`item-${i}`} className="mb-1">
            <StyledSmall>{subtitle}</StyledSmall>
          </p>
        )
      }
    </div>
  </div>
);

LocationHeader.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
};

export default LocationHeader;
