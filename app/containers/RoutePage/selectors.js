import { createSelector } from 'reselect';

/**
 * Direct selector to the routePage state domain
 */
const selectRoutePageDomain = (state) => state.get('routePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RoutePage
 */

const makeSelectRoutePage = () => createSelector(
  selectRoutePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectRoutePage;
export {
  selectRoutePageDomain,
};
