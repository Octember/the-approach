/*
 *
 * WriteReviewPage actions
 *
 */

import {
  LOCATION_LIST_ACTION, LOCATION_LIST_SUCCESS_ACTION, LOCATION_LIST_FAILURE_ACTION, SELECTED_LOCATION_CHANGE_ACTION
} from './constants';

export function locationList() {
  console.log('Location list')
  return {
    type: LOCATION_LIST_ACTION,
  };
}

export function locationListLoaded(locations) {
  return {
    type: LOCATION_LIST_SUCCESS_ACTION,
    locations,
  };
}

export const selectedLocationChange = (selectedOption) => ({
  type: SELECTED_LOCATION_CHANGE_ACTION,
  locationId: selectedOption.value,
});

export function locationListLoadingError(error) {
  return {
    type: LOCATION_LIST_FAILURE_ACTION,
    error,
  };
}