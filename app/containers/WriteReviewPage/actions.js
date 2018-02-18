/*
 *
 * WriteReviewPage actions
 *
 */

import {
  LOCATION_LIST_ACTION,
  LOCATION_LIST_SUCCESS_ACTION,
  LOCATION_LIST_FAILURE_ACTION,
  GUIDE_LIST_ACTION,
  GUIDE_LIST_SUCCESS_ACTION,
  GUIDE_LIST_FAILURE_ACTION,
  SELECTED_LOCATION_CHANGE_ACTION,
} from './constants';

export function locationList() {
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

export function locationListLoadingError(error) {
  return {
    type: LOCATION_LIST_FAILURE_ACTION,
    error,
  };
}

export function guideList() {
  return {
    type: GUIDE_LIST_ACTION,
  };
}

export function guideListLoaded(guides) {
  return {
    type: GUIDE_LIST_SUCCESS_ACTION,
    guides,
  };
}

export function guideListLoadingError(error) {
  return {
    type: GUIDE_LIST_FAILURE_ACTION,
    error,
  };
}

export const selectedLocationChange = (selectedOption) => ({
  type: SELECTED_LOCATION_CHANGE_ACTION,
  locationId: selectedOption ? selectedOption.value : null,
});
