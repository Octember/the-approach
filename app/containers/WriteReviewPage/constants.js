/*
 *
 * WriteReviewPage constants
 *
 */

/***** STATES *****/

// Loading booleans
export const STATE_LOCATIONS_LOADING = 'app/WriteReviewPage/STATE_LOCATIONS_LOADING';
export const STATE_GUIDES_LOADING = 'app/WriteReviewPage/STATE_GUIDES_LOADING';
// Status booleans
export const STATE_IS_GUIDED = 'app/WriteReviewPage/STATE_IS_GUIDED';

// Select dropdown arrays
export const STATE_LOCATION_DROPDOWN_LIST = 'app/WriteReviewPage/STATE_LOCATION_DROPDOWN_LIST';
export const STATE_GUIDE_DROPDOWN_LIST = 'app/WriteReviewPage/STATE_GUIDE_DROPDOWN_LIST';

// ID numbers (unique, long)
export const STATE_SELECTED_LOCATION_ID = 'app/WriteReviewPage/STATE_SELECTED_LOCATION_ID';
export const STATE_SELECTED_GUIDE_ID = 'app/WriteReviewPage/STATE_SELECTED_GUIDE_ID';

// Rating numbers (fractional, 0-5)
export const STATE_TRIP_RATING = 'app/WriteReviewPage/STATE_TRIP_RATING';
export const STATE_GUIDE_RATING = 'app/WriteReviewPage/STATE_GUIDE_RATING';

// User-input string
export const STATE_TRIP_REPORT_DETAILS = 'app/WriteReviewPage/STATE_TRIP_REPORT_DETAILS';


/***** ACTIONS *****/

// Locations
export const LOCATION_LIST_ACTION = 'app/WriteReviewPage/LOCATION_LIST_ACTION';
export const LOCATION_LIST_SUCCESS_ACTION = 'app/WriteReviewPage/LOCATION_LIST_SUCCESS_ACTION';
export const LOCATION_LIST_FAILURE_ACTION = 'app/WriteReviewPage/LOCATION_LIST_FAILURE_ACTION';
export const SELECTED_LOCATION_CHANGE_ACTION = 'app/WriteReviewPage/SELECTED_LOCATION_CHANGE_ACTION';

// Guides
export const TOGGLE_IS_GUIDED_ACTION = 'app/WriteReviewPage/TOGGLE_IS_GUIDED_ACTION';
export const GUIDE_LIST_ACTION = 'app/WriteReviewPage/GUIDE_LIST_ACTION';
export const GUIDE_LIST_SUCCESS_ACTION = 'app/WriteReviewPage/GUIDE_LIST_SUCCESS_ACTION';
export const GUIDE_LIST_FAILURE_ACTION = 'app/WriteReviewPage/GUIDE_LIST_FAILURE_ACTION';
export const SELECTED_GUIDE_CHANGE_ACTION = 'app/WriteReviewPage/SELECTED_GUIDE_CHANGE_ACTION';

// Ratings
export const SELECT_TRIP_RATING_ACTION = 'app/WriteReviewPage/SELECT_TRIP_RATING_ACTION';
export const SELECT_GUIDE_RATING_ACTION = 'app/WriteReviewPage/SELECT_GUIDE_RATING_ACTION';

// Text input
export const UPDATE_TRIP_REPORT_DETAILS_ACTION = 'app/WriteReviewPage/UPDATE_TRIP_REPORT_DETAILS_ACTION';

export const DEFAULT_ACTION = 'app/WriteReviewPage/DEFAULT_ACTION';
