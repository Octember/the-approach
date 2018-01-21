/**
*
* OfferRouteComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledSmall from 'components/shared/StyledSmall';
import PageTitle from 'components/shared/PageTitle';

import GuideCard from 'components/GuideCard';

const TripBoxBorderDiv = styled.div`
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const OfferRouteHeader = styled.h2 `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 1.5em;
`;

const OfferRouteInfo = styled.ul `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 0.75em;
`;

function OfferRouteBox(props) {
  return (
    <TripBoxBorderDiv className={`d-flex flex-column px-4 py-2 ${props.className}`}>
      <div >
            <OfferRouteHeader>
              <div className = "pt-1">
                {'Crevasse Rescue Course'}
              </div>
            </OfferRouteHeader>
      </div>
      <div className = "pl-4">
            <OfferRouteInfo className="list-unstyled">
                <li>
                  <img src="https://www.shareicon.net/data/128x128/2016/06/06/582476_location_16x16.png" width = "12" height = "15.6"/>
                  {'Mt. Rainer'}
                </li>
                <li>
                  <img src="https://www.shareicon.net/data/128x128/2016/06/06/582463_clock_16x16.png" width = "12" height = "12"/>
                  {'Duration: 4 hours 20 minutes'}
                </li>
            </OfferRouteInfo>
      </div>
      <button type="button" className="btn btn-primary btn-block py-2">Schedule</button>
      
    </TripBoxBorderDiv>
  );
}

OfferRouteBox.propTypes = {
  location: PropTypes.object,
  
};

OfferRouteBox.defaultProps = {
  offer: {
    url: '/offer/1',
  },
};

export default OfferRouteBox;
