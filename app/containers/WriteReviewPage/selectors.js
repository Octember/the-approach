import { createSelector } from 'reselect';
import {
  STATE_LOCATION_DROPDOWN_LIST, STATE_SELECTED_LOCATION_ID,
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
  (domain) => {
    const x = domain.get(STATE_LOCATION_DROPDOWN_LIST).toJS();
    // console.log(x)
    return x;
  }
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
  selectSelectedLocationId,
  selectWriteReviewPageDomain,
};
