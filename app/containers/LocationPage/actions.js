/*
 *
 * LocationPage actions
 *
 */

import {
  LOAD_ROUTE_DATA,
  LOAD_ROUTE_DATA_SUCCESS,
  LOAD_ROUTE_DATA_ERROR
} from './constants';

export function loadLocationPage(locationId) {
  console.log("Load route page action with location id " + locationId)
  return {
    type: LOAD_ROUTE_DATA,
    locationId,
  };
}

export function locationDataLoaded(routeData, locationId) {
  return {
    type: LOAD_ROUTE_DATA_SUCCESS,
    routeData,
    locationId,
  };
}

export function locationDataLoadingError(error) {
  return {
    type: LOAD_ROUTE_DATA_ERROR,
    error,
  };
}
