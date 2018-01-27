/*
 *
 * TripDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TRIP_DATA, LOAD_TRIP_DATA_ERROR, LOAD_TRIP_DATA_SUCCESS, TRIP_API_DATA_DOMAIN, STATE_LOADING
} from './constants';

const initialState = fromJS({
  tripData: {
    guideData: {
      image: {},
      guide: {},
    },
    trip: {},
    locationData:{
      images: [],
  },
  },
});

function tripDetailPageReducer(state = initialState, action) {
  console.log(`Trip reducer: ${action.type}`);
  switch (action.type) {
    case LOAD_TRIP_DATA:
      return state
        .set('tripId', action.tripId)
        .set(STATE_LOADING, true);
    case LOAD_TRIP_DATA_SUCCESS:
      return state
        .set('tripId', action.tripId)
        .set(TRIP_API_DATA_DOMAIN, action.tripData)
        .set(STATE_LOADING, false);
    case LOAD_TRIP_DATA_ERROR:
      return state
        .set('error', action.error)
        .set(STATE_LOADING, false);
    default:
      return state;
  }
}

export default tripDetailPageReducer;
