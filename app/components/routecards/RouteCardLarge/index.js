/**
 *
 * RouteCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const RouteImageContainer = styled.div `
  overflow: hidden;
`;

const RouteImage = styled.img `
  object-fit: cover;
`;

function RouteCardLarge(props) {
  return (
    <Link
      to="/route"
      className="text-black"
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <div className="container py-1">
        <div className="row">
          <div className="col-12 px-0">
            <RouteImageContainer>
              <RouteImage className="d-block img-fluid" src={props.imageUrl} alt="First slide" />
            </RouteImageContainer>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-6 pl-0">
            <small>
              Mt. Rainier National Park
            </small>
          </div>
          <div className="col-6 text-right pr-0">
            <small>
              {props.routeStats.grade} - {props.routeStats.type} - {props.routeStats.length}
            </small>
          </div>
        </div>

        <div className="row">
          <div className="col-6 pl-0">
            <h5 className="font-weight-bold">{props.routeName}</h5>
          </div>
          <div className="col-6 pr-0">
            <div className="d-flex flex-row-reverse">
              <Stars
                className="d-inline-block ml-auto"
                value={props.routeStats.rating}
                editable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

RouteCardLarge.propTypes = {
  routeName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  routeStats: PropTypes.shape({
    grade: PropTypes.string,
    type: PropTypes.string, // could do custom validators here
    length: PropTypes.string,
    rating: PropTypes.number,
    countRatings: PropTypes.number,
  }),
};

export default RouteCardLarge;
