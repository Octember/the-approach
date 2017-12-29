import { createSelector } from 'reselect';
import { STATE_ROUTE_DATA } from './constants';

/**
 * Direct selector to the routePage state domain
 */
const selectRoutePageDomain = (state) => state.get('routePage');

const selectRouteDataDomain = () => createSelector(
  selectRoutePageDomain,
  (routeState) => routeState.get(STATE_ROUTE_DATA)
);

/**
 * Other specific selectors
 */

const selectRoutePageId = () => createSelector(
  selectRoutePageDomain,
  (routeState) => routeState.toJS().routeId
);

const selectImagesFromRoute = () => createSelector(
  selectRouteDataDomain,
  (routeData) => routeData.get('images')
)

/**
 * Default selector used by RoutePage
 */

const makeSelectRoutePage = () => createSelector(
  selectRoutePageDomain,
  (substate) => substate.toJS()
);

export {
  makeSelectRoutePage,
  selectRoutePageDomain,
  selectRoutePageId,
  selectImagesFromRoute,
};
