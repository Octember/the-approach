/**
*
* ScheduleTripComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScheduleTripBox(props) {
  return (
    <div className="row">

      <div className="col-1" />
      <div className="col-5">
        <h4>{props.price}</h4>
        <p>{props.duration}</p>
      </div>
      <div className="col-5">
        <Link to="/offerlist">
          <button type="button" className="btn btn-primary btn-block">Schedule</button>
        </Link>
      </div>
      <div className="col-1" />
    </div>
  );
}

ScheduleTripBox.propTypes = {
  price: PropTypes.string,
  duration: PropTypes.string,
}; // TODO something needed forscheduling link

export default ScheduleTripBox;
