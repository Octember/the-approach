import { createSelector } from 'reselect';
import {
  STATE_LOCATION_DROPDOWN_LIST,
  STATE_GUIDE_DROPDOWN_LIST,
  STATE_SELECTED_LOCATION_ID,
} from './constants';

/**
 * Direct selector to the WriteReviewPage state domain
 */
const selectWriteReviewPageDomain = (state) => state.get('WriteReviewPage');

/**
 * Other specific selectors
 */
const selectLocationList = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_LOCATION_DROPDOWN_LIST).toJS()
);

const selectGuideList = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_GUIDE_DROPDOWN_LIST).toJS()
);

const selectSelectedLocationId = () => createSelector(
  selectWriteReviewPageDomain,
  (domain) => domain.get(STATE_SELECTED_LOCATION_ID)
);

/**
 * Default selector used by WriteReviewPage
 */

export {
  selectLocationList,
  selectGuideList,
  selectSelectedLocationId,
  selectWriteReviewPageDomain,
};
