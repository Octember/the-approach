/*
 *
 * WriteReviewPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOCATION_LIST_ACTION,
  STATE_LOCATIONS_LOADING,
  LOCATION_LIST_SUCCESS_ACTION,
  STATE_LOCATION_DROPDOWN_LIST,
  SELECTED_LOCATION_CHANGE_ACTION,
  STATE_SELECTED_LOCATION_ID,

  TOGGLE_IS_GUIDED_ACTION,
  STATE_IS_GUIDED,
  GUIDE_LIST_ACTION,
  STATE_GUIDES_LOADING,
  GUIDE_LIST_SUCCESS_ACTION,
  STATE_GUIDE_DROPDOWN_LIST,
  SELECTED_GUIDE_CHANGE_ACTION,
  STATE_SELECTED_GUIDE_ID,

  SELECT_TRIP_RATING_ACTION,
  STATE_TRIP_RATING,
  SELECT_GUIDE_RATING_ACTION,
  STATE_GUIDE_RATING,

  UPDATE_TRIP_REPORT_DETAILS_ACTION,
  STATE_TRIP_REPORT_DETAILS,

  CUSTOM_VALIDATION_FAILED_ACTION,
  STATE_CUSTOM_VALIDATION_FAILED
} from './constants';

const initialState = fromJS({
  [STATE_LOCATION_DROPDOWN_LIST]: fromJS([]),
  [STATE_GUIDE_DROPDOWN_LIST]: fromJS([]),
  [STATE_TRIP_RATING]: null,
  [STATE_GUIDE_RATING]: null,
  [STATE_TRIP_REPORT_DETAILS]: '',
  [STATE_CUSTOM_VALIDATION_FAILED]: false,
});

function writeReviewPageReducer(state = initialState, action) {
  switch (action.type) {
    // Location actions
    case LOCATION_LIST_ACTION:
      return state
        .set(STATE_LOCATIONS_LOADING, true);
    case LOCATION_LIST_SUCCESS_ACTION:
      return state
        .set(STATE_LOCATIONS_LOADING, false)
        .set(STATE_LOCATION_DROPDOWN_LIST, fromJS(action.locations));
    case SELECTED_LOCATION_CHANGE_ACTION:
      return state
        .set(STATE_SELECTED_LOCATION_ID, action.locationId);

    // Guide actions
    case TOGGLE_IS_GUIDED_ACTION:
      return state
        .set(STATE_IS_GUIDED, action.isGuided);
    case GUIDE_LIST_ACTION:
      return state
        .set(STATE_GUIDES_LOADING, true);
    case GUIDE_LIST_SUCCESS_ACTION:
      return state
        .set(STATE_GUIDES_LOADING, false)
        .set(STATE_GUIDE_DROPDOWN_LIST, fromJS(action.guides));
    case SELECTED_GUIDE_CHANGE_ACTION:
      return state
        .set(STATE_SELECTED_GUIDE_ID, action.guideId);

    //Rating actions
    case SELECT_TRIP_RATING_ACTION:
      return state
        .set(STATE_TRIP_RATING, action.tripRating);
    case SELECT_GUIDE_RATING_ACTION:
      return state
        .set(STATE_GUIDE_RATING, action.guideRating);

    // Other actions
    case UPDATE_TRIP_REPORT_DETAILS_ACTION:
      return state
        .set(STATE_TRIP_REPORT_DETAILS, action.tripDetails);
    case CUSTOM_VALIDATION_FAILED_ACTION:
      return state
        .set(STATE_CUSTOM_VALIDATION_FAILED, true);
    default:
      return state;
  }
}

export default writeReviewPageReducer;
