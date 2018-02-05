import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';

// Easily keeps image/logo within good size range (on mobile at least).
const ProfileImg = styled.img`
  min-height: 75px;
  min-width: 75px;
  max-height: 100px;
  max-width: 100px;
`

const ProfileHeader = (props) => (
  <div className="text-center">
    <BorderBottomDiv>
      <ProfileImg src={props.url} className="mt-4"
        alt={props.guide ? 'guide logo' :'profile image'}
      />
      <h1 className="h2 text-info">{props.name}</h1>
      {
        // Only creates a location/summary element if one exists
        (props.location || props.summary) &&
        <h2 className="h5 mb-3 text-muted">{props.location ? props.location : props.summary}</h2>
      }
    </BorderBottomDiv>
    <BorderBottomDiv>
      <ul className="list-inline row m-2 justify-content-around">
        {
          props.stats.map((stat, i) => {
            return (
              <li className="list-inline-item" key={i}>
                <p className="h3 text-info">{stat.count}</p>
                <p className="small text-muted mb-0">
                  {stat.label}
                </p>
              </li>
            )
          })
        }
      </ul>
    </BorderBottomDiv>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired, // To clarify: profile-image url (not website)
  location: PropTypes.string,   // For guide (and maybe user?)
  summary: PropTypes.string,    // For users?
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
};

ProfileHeader.defaultProps = {
  stats: [
    { label: 'Followers', count: 0 },
    { label: 'Photos', count: 0 },
    { label: 'Adventures', count: 0 },
    { label: 'Trip Reports', count: 0 },
  ],
};

export default ProfileHeader;

