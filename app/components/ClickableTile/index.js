/**
*
* ClickableTile
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';
import Link from './Link';
import Label from './Label';

// import styled from 'styled-components';

function ClickableTile(props) {
  return (
    <Tile background={props.data.image}>
      <Link href={props.data.link}>
        <Label>{props.data.title}</Label>
      </Link>
    </Tile>
  );
}

ClickableTile.propTypes = {
	title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string
};

export default ClickableTile;
