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
  GUIDE_LIST_ACTION,
  STATE_GUIDES_LOADING,
  GUIDE_LIST_SUCCESS_ACTION,
  STATE_GUIDE_DROPDOWN_LIST,
  SELECTED_LOCATION_CHANGE_ACTION,
  STATE_SELECTED_LOCATION_ID,
} from './constants';

const initialState = fromJS({
  [STATE_LOCATION_DROPDOWN_LIST]: fromJS([]),
  [STATE_GUIDE_DROPDOWN_LIST]: fromJS([]),
});

function writeReviewPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_LIST_ACTION:
      return state
        .set(STATE_LOCATIONS_LOADING, true);
    case LOCATION_LIST_SUCCESS_ACTION:
      return state
        .set(STATE_LOCATIONS_LOADING, false)
        .set(STATE_LOCATION_DROPDOWN_LIST, fromJS(action.locations));
    case GUIDE_LIST_ACTION:
      return state
        .set(STATE_GUIDES_LOADING, true);
    case GUIDE_LIST_SUCCESS_ACTION:
      return state
        .set(STATE_GUIDES_LOADING, false)
        .set(STATE_GUIDE_DROPDOWN_LIST, fromJS(action.guides));
    case SELECTED_LOCATION_CHANGE_ACTION:
      return state
        .set(STATE_SELECTED_LOCATION_ID, action.locationId);
    default:
      return state;
  }
}

export default writeReviewPageReducer;
