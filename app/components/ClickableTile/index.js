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


function ClickableTile(props) {
  return (
    <Tile background={props.image}>
      <Link href={props.link}>
        <Label>{props.title}</Label>
      </Link>
    </Tile>
  );
}

ClickableTile.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};

export default ClickableTile;
