import { createSelector } from 'reselect';

/**
 * Direct selector to the routeListPage state domain
 */
const selectRouteListPageDomain = (state) => state.get('routeListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RouteListPage
 */

const makeSelectRouteListPage = () => createSelector(
  selectRouteListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectRouteListPage;
export {
  selectRouteListPageDomain,
};
