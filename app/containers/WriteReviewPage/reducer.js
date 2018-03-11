/*
 *
 * WriteReviewPage reducer
 *
 */

import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  [constants.STATE_LOCATION_DROPDOWN_LIST]: fromJS([]),
  [constants.STATE_GUIDE_DROPDOWN_LIST]: fromJS([]),
  [constants.STATE_TRIP_RATING]: null,
  [constants.STATE_GUIDE_RATING]: null,
  [constants.STATE_TRIP_REPORT_DETAILS]: '',
  [constants.STATE_CUSTOM_VALIDATION_FAILED]: false,
  [constants.STATE_TRIP_REPORT_DETAILS]: '',
});

function writeReviewPageReducer(state = initialState, action) {
  switch (action.type) {
    // Location actions
    case constants.LOCATION_LIST_ACTION:
      return state
        .set(constants.STATE_LOCATIONS_LOADING, true);
    case constants.LOCATION_LIST_SUCCESS_ACTION:
      return state
        .set(constants.STATE_LOCATIONS_LOADING, false)
        .set(constants.STATE_LOCATION_DROPDOWN_LIST, fromJS(action.locations));
    case constants.SELECTED_LOCATION_CHANGE_ACTION:
      return state
        .set(constants.STATE_SELECTED_LOCATION_ID, action.locationId);

    // Guide actions
    case constants.TOGGLE_IS_GUIDED_ACTION:
      return state
        .set(constants.STATE_IS_GUIDED, action.isGuided);
    case constants.GUIDE_LIST_ACTION:
      return state
        .set(constants.STATE_GUIDES_LOADING, true);
    case constants.GUIDE_LIST_SUCCESS_ACTION:
      return state
        .set(constants.STATE_GUIDES_LOADING, false)
        .set(constants.STATE_GUIDE_DROPDOWN_LIST, fromJS(action.guides));
    case constants.SELECTED_GUIDE_CHANGE_ACTION:
      return state
        .set(constants.STATE_SELECTED_GUIDE_ID, action.guideId);

    // Rating actions
    case constants.SELECT_TRIP_RATING_ACTION:
      return state
        .set(constants.STATE_TRIP_RATING, action.tripRating);
    case constants.SELECT_GUIDE_RATING_ACTION:
      return state
        .set(constants.STATE_GUIDE_RATING, action.guideRating);

    // Review submit
    case constants.REVIEW_SUBMIT_REQUEST:
      return state;
        // .set(constants) set submitting to true, show some spinner?

    case constants.REVIEW_SUBMISSION_FAILURE:
      return state
        .set(constants.STATE_REVIEW_API_ERROR_MESSAGE, action.errorMessage);

    // Other actions
    case constants.UPDATE_TRIP_REPORT_DETAILS_ACTION:
      return state
        .set(constants.STATE_TRIP_REPORT_DETAILS, action.tripDetails);

    case constants.CUSTOM_VALIDATION_FAILED_ACTION:
      return state
        .set(constants.STATE_CUSTOM_VALIDATION_FAILED, true);
    default:
      return state;
  }
}

export default writeReviewPageReducer;
