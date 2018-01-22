/*
 *
 * TripDetailPage actions
 *
 */

import {
  LOAD_TRIP_DATA, LOAD_TRIP_DATA_ERROR, LOAD_TRIP_DATA_SUCCESS
} from './constants';

export function loadTripPage(tripId) {
  console.log('Load trip page action with trip id ' + tripId)
  return {
    type: LOAD_TRIP_DATA,
    tripId,
  };
}

export function tripDataLoaded(tripData, tripId) {
  return {
    type: LOAD_TRIP_DATA_SUCCESS,
    tripData,
    tripId,
  };
}

export function tripDataLoadingError(error) {
  console.log("error " + error)
  return {
    type: LOAD_TRIP_DATA_ERROR,
    error,
  };
}
