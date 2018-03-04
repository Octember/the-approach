/*
 *
 * WriteReviewPage selectors
 *
 */

import { createSelector } from 'reselect';
import {
  STATE_LOCATION_DROPDOWN_LIST,
  STATE_SELECTED_LOCATION_ID,

  STATE_IS_GUIDED,
  STATE_GUIDE_DROPDOWN_LIST,
  STATE_SELECTED_GUIDE_ID,

  STATE_TRIP_RATING,
  STATE_GUIDE_RATING,

  STATE_TRIP_REPORT_DETAILS,
  STATE_CUSTOM_VALIDATION_FAILED,
} from './constants';

/**
 * Direct selector to the WriteReviewPage state domain
 */
export const selectWriteReviewPageDomain = (state) => state.get('WriteReviewPage');

/**
 * Other specific selectors
 */

// Location selectors
export const selectLocationList = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_LOCATION_DROPDOWN_LIST).toJS()
);

export const selectSelectedLocationId = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_SELECTED_LOCATION_ID)
);

// Guide selectors
export const selectIsGuided = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_IS_GUIDED)
);

export const selectGuideList = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_GUIDE_DROPDOWN_LIST).toJS()
);

export const selectSelectedGuideId = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_SELECTED_GUIDE_ID)
);

// Ratings selectors
export const selectTripRating = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_TRIP_RATING)
);

export const selectGuideRating = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_GUIDE_RATING)
);

// Other selectors
export const selectTripReportDetails = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_TRIP_REPORT_DETAILS)
);

export const selectCustomValidationFailed = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_CUSTOM_VALIDATION_FAILED)
);