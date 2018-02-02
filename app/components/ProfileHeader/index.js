import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';

// Easily keeps image/logo within good size range.
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
          Object.keys(props.stats).map((stat, i, arr) => {
            return (
              <li className="list-inline-item" key={i}>
                <p className="h3 text-info">{props.stats[stat]}</p>
                <p className="small text-muted mb-0">
                  {/* Capitalize stat name and add space before camelcase or snakecase character (or number) */}
                  { stat.slice(0, 1).toUpperCase() + stat.slice(1)
                    .replace(/(_[a-z])|[_]?([A-Z0-9])/g, (match, p1, p2) => {
                      return ' ' + (p1 ? p1.slice(1).toUpperCase() : p2 );
                    })
                  }
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
  url: PropTypes.string.isRequired,
  location: PropTypes.string,   // For guide (and maybe user?)
  summary: PropTypes.string,    // For users?
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

ProfileHeader.defaultProps = {
  stats: {
    followers: 0,
    photos: 0,
    adventures: 0,
    tripReports: 0,
  },
};

export default ProfileHeader;

