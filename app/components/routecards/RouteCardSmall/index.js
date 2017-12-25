/**
 *
 * RouteCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';

function RouteCardSmall(props) {
  return (
    <div className="row py-2">
      <div className="col-xs-4">
        <h4 className="text-left pl-2">{props.routeName}</h4>
      </div>
      <div className="col" />
      <div className="col-xs-5 pr-4 text-left">
        <p className="px-1 mb-0">
          {props.routeStats.grade} - {props.routeStats.type} - {props.routeStats.length}
        </p>
        <Stars
          value={props.routeStats.rating}
          editable={false}
        />
        {/* todo: num reviews */}
      </div>
    </div>
  );
}

RouteCardSmall.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeStats: PropTypes.shape({
    grade: PropTypes.string,
    type: PropTypes.string, // could do custom validators here
    length: PropTypes.string,
    rating: PropTypes.number,
    countRatings: PropTypes.number,
  }),
};

export default RouteCardSmall;
