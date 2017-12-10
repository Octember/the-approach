import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars';

function Card(props) {
  return (
    <div className="mr-2">
      <img src={props.imageUrl} alt={props.title} className="img-fluid rounded" />
      <p className="mb-1">{props.routeStats.grade} - {props.routeStats.type} - {props.routeStats.length}</p>
      <h3 className="mb-0">{props.title}</h3>
      <Stars
        value={props.routeStats.rating}
        editable={false}
      />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  routeStats: PropTypes.shape({
    grade: PropTypes.string,
    type: PropTypes.string, // could do custom validators here
    length: PropTypes.string,
    rating: PropTypes.number,
    countRatings: PropTypes.number,
  }),
};

Card.defaultProps = {
  title: 'Route 2',
  imageUrl: 'https://www.mountainlodgesofperu.com/2017/files/sll-contenido-columna-2017.png',
  routeStats: {
    grade: '5.10a',
    type: 'lead',
    length: '75\'',
    rating: 5.0,
    countRatings: 14,
  },
};

export default Card;
