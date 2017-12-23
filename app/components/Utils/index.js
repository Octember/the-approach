
import React from 'react';
import {} from 'react-intl';

function BorderBottomDiv(props) {
  return (
    <div className={`border border-secondary border-left-0 border-right-0 border-top-0`}>
      {props.children}
    </div>
  );
}

export default BorderBottomDiv;
