/**
 *
 * OfferScheduleBox
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BorderOutlineDiv from 'components/shared/BorderOutlineDiv';
import Icon from 'components/shared/Icon';

const StyledOfferScheduleIcon = styled(Icon).attrs({
  className: 'm-2',
})``;

const OfferScheduleBox = (props) => (
  <BorderOutlineDiv className={props.className}>
    <div className="d-flex flex-column p-3">
      <h2 className="mt-1 mb-0">
        {'Crevasse Rescue Course'}
      </h2>
      <div className="ml-2">
        <ul className="list-unstyled">
          <li>
            <StyledOfferScheduleIcon symbol="map_pin" />
            {'Mt. Rainer'}
          </li>
          <li>
            <StyledOfferScheduleIcon symbol="clock" />
            {'Duration: 4 hours 20 minutes'}
          </li>
        </ul>
      </div>
      <button type="button" className="btn btn-primary btn-block rounded-0">Schedule</button>
    </div>

  </BorderOutlineDiv>
);


OfferScheduleBox.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
};

OfferScheduleBox.defaultProps = {
  offer: {
    url: '/offer/1',
  },
};

export default OfferScheduleBox;
