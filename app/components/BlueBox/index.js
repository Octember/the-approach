/**
*
* BlueBoxComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BlueBox() {
  return (
    <div className="row">
      <div className="col-md-8 px-0">
        <Link to="/offerlist">. 
          <button type="button" className="btn btn-primary btn-block">Submit</button>
        
        </Link>
      </div>
      <div className="col-1" />
    </div>
  );
}

BlueBox.propTypes = {
  price: PropTypes.string,
  duration: PropTypes.string,
}; // TODO something needed for upload link

export default BlueBox;
