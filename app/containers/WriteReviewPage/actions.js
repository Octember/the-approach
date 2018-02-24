/*
 *
 * WriteReviewPage actions
 *
 */

import {
  LOCATION_LIST_ACTION,
  LOCATION_LIST_SUCCESS_ACTION,
  LOCATION_LIST_FAILURE_ACTION,
  SELECTED_LOCATION_CHANGE_ACTION,

  TOGGLE_IS_GUIDED_ACTION,
  GUIDE_LIST_ACTION,
  GUIDE_LIST_SUCCESS_ACTION,
  GUIDE_LIST_FAILURE_ACTION,
  SELECTED_GUIDE_CHANGE_ACTION,

  SELECT_TRIP_RATING_ACTION,
  SELECT_GUIDE_RATING_ACTION,

  UPDATE_TRIP_REPORT_DETAILS_ACTION
} from './constants';

// Location actions
export const locationList = () => ({
  type: LOCATION_LIST_ACTION,
});

export const locationListLoaded = (locations) => ({
  type: LOCATION_LIST_SUCCESS_ACTION,
  locations,
});

export const locationListLoadingError = (error) => ({
  type: LOCATION_LIST_FAILURE_ACTION,
  error,
});

export const selectedLocationChange = (selectedOption) => ({
  type: SELECTED_LOCATION_CHANGE_ACTION,
  locationId: selectedOption ? selectedOption.value : null,
});

// Guide actions
export const isGuidedToggleChange = (toggleValue) => ({
  type: TOGGLE_IS_GUIDED_ACTION,
  isGuided: toggleValue,
});

export const guideList = () => ({
  type: GUIDE_LIST_ACTION,
});

export const guideListLoaded = (guides) => ({
  type: GUIDE_LIST_SUCCESS_ACTION,
  guides,
});

export const guideListLoadingError = (error) => ({
  type: GUIDE_LIST_FAILURE_ACTION,
  error,
});

export const selectedGuideChange = (selectedOption) => ({
  type: SELECTED_GUIDE_CHANGE_ACTION,
  guideId: selectedOption ? selectedOption.value : null,
});

// Rating actions
export const selectTripRatingChange = (tripRatingValue) => ({
  type: SELECT_TRIP_RATING_ACTION,
  tripRating: tripRatingValue,
});

export const selectGuideRatingChange = (guideRatingValue) => ({
  type: SELECT_GUIDE_RATING_ACTION,
  guideRating: guideRatingValue,
});

//Other actions
export const updateTripReportDetailsOnChange = (textChangeEvent) => ({
  type: UPDATE_TRIP_REPORT_DETAILS_ACTION,
  tripDetails: textChangeEvent.target.value,
})
