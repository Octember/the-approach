/*
 *
 * LocationPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_ROUTE_DATA, LOAD_ROUTE_DATA_SUCCESS, LOAD_ROUTE_DATA_ERROR, STATE_LOADING } from './constants';

const initialState = fromJS({
  locationData: {
    images: [],
    subLocations: [],
    location: {
      title: '',
    },
    reviews: [],
  },
});

function locationPageReducer(state = initialState, action) {
  console.log(`Route reducer: ${action.type}`);
  switch (action.type) {
    case LOAD_ROUTE_DATA:
      return state
        .set('locationId', action.locationId)
        .set(STATE_LOADING, true);
    case LOAD_ROUTE_DATA_SUCCESS:
      return state
        .set('locationId', action.locationId)
        .set('locationData', action.locationData)
        .set(STATE_LOADING, false);
    case LOAD_ROUTE_DATA_ERROR:
      return state
        .set('error', action.error)
        .set(STATE_LOADING, false);
    default:
      return state;
  }
}

export default locationPageReducer;
