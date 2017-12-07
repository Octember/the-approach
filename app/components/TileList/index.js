import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function TileList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} data={item} />
    ));
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

TileList.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default TileList;
