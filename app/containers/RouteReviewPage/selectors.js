import { createSelector } from 'reselect';

/**
 * Direct selector to the routeReviewPage state domain
 */
const selectRouteReviewPageDomain = (state) => state.get('routeReviewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RouteReviewPage
 */

const makeSelectRouteReviewPage = () => createSelector(
  selectRouteReviewPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectRouteReviewPage;
export {
  selectRouteReviewPageDomain,
};
