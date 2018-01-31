import { createSelector } from 'reselect';

/**
 * Direct selector to the WriteReviewPage state domain
 */
const selectWriteReviewPageDomain = (state) => state.get('WriteReviewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WriteReviewPage
 */

const makeSelectWriteReviewPage = () => createSelector(
  selectWriteReviewPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectWriteReviewPage;
export {
  selectWriteReviewPageDomain,
};
