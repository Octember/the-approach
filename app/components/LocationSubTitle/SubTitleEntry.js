import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTitleImage = styled.img `
  height: 128px;
  object-fit: cover;
`;

const SubTitleSpacer = styled.div `
  height: 50px;
  background-color: black;
`;

const SubTitleOverlayFadeDiv = styled.div `
  top: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom,rgba(0,0,0, 0) 40%, rgba(0,0,0,1)); 
`;

function SubTitleEntry(props) {
  const className = props.index === 0 ? 'SubTitle-item active' : 'SubTitle-item';

  return (
    <div className={className}>
      <div className="position-relative">
        <SubTitleImage
          className="w-100"
          src={props.url}
          alt="First slide"
        />
        <SubTitleOverlayFadeDiv className="position-absolute w-100 h-100" />
      </div>

      <SubTitleSpacer className="w-100" />
    </div>
  );
}

SubTitleEntry.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default SubTitleEntry;
