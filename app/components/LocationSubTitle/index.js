/**
*
* SubTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledSmall from 'components/shared/StyledSmall';
import PageTitle from 'components/shared/PageTitle';
import moment from 'moment';
import {} from 'react-intl';

import LocationHeader from 'components/LocationHeader';
const LocationImage = styled.img`
  width: 100%;
  height: 128px;
  object-fit: fill;
`;

const SubTitleOverlayDiv = styled.div `
  background-color: rgba(54,64,88,.6); 
`;

const SubTitleHeader = styled.h2 `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 1.5em;
  color: white;
`;

const SubTitleInfo = styled.ul `
  font-family: AvenirNext-Regular;
  font-style: normal;
  font-size: 0.75em;
  color: white;
`;

const CardBorderDiv = styled.div`
    box-shadow: 2px 6px 8px 2px rgba(0, 0, 0, 0.2);
`;


function LocationSubTitleHelper(props) {
  return (
    <div>
    <LocationImage
            className="img-fluid"
            src={props.image.url} height = "128"
          />
    </div>
    );
}

LocationSubTitleHelper.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const LocationSubTitle = (props) => {
  console.log(props.image)
  return (
    <CardBorderDiv>
    <div className="position-relative">
      <SubTitleOverlayDiv className="position-absolute px-2 w-100 h-100 ">

          <div >
            <SubTitleHeader>
              <div className = "pt-4">
              <div className = "pt-2">
              {props.location.title}
              </div>
              </div>
            </SubTitleHeader>
          </div>
          <div className = "pl-4">
            <SubTitleInfo className="list-unstyled">
                <li>
                  <img src="https://www.shareicon.net/data/128x128/2016/06/06/582476_location_16x16.png" width = "12" height = "15.6"/>
                  {props.location.regionName}
                </li>
                <li>
                  <img src="https://www.shareicon.net/data/128x128/2016/06/06/582459_keychain_16x16.png" width = "12" height = "12"/>
                  {'Grade: A+'}
                </li>
                <li>
                  <img src="https://www.shareicon.net/data/128x128/2016/06/06/582463_clock_16x16.png" width = "12" height = "12"/>
                  {'Duration: 4 hours 20 minutes'}
                </li>
            </SubTitleInfo>
          </div>

      </SubTitleOverlayDiv>

      <LocationSubTitleHelper image={props.image} />
      
    </div>
    </CardBorderDiv>
  );
};

LocationSubTitle.propTypes = {
  location: PropTypes.object,
  image: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};


export default LocationSubTitle;

