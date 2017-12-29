/*
 *
 * RoutePage actions
 *
 */

import {
  LOAD_ROUTE_DATA,
  LOAD_ROUTE_DATA_SUCCESS,
  LOAD_ROUTE_DATA_ERROR
} from './constants';

export function loadRoutePage(routeId) {
  console.log("Load route page action with route id " + routeId)
  return {
    type: LOAD_ROUTE_DATA,
    routeId,
  };
}

export function routeDataLoaded(routeData, routeId) {
  return {
    type: LOAD_ROUTE_DATA_SUCCESS,
    routeData,
    routeId,
  };
}

export function routeDataLoadingError(error) {
  return {
    type: LOAD_ROUTE_DATA_ERROR,
    error,
  };
}
