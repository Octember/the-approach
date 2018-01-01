import { createSelector } from 'reselect';

/**
 * Direct selector to the routePage state domain
 */
const selectRoutePageDomain = (state) => state.get('routePage');

/**
 * Other specific selectors
 */

const selectRoutePageId = () => createSelector(
  selectRoutePageDomain,
  (routeState) => routeState.toJS().routeId
);

const selectImagesFromRoute = () => createSelector(
  selectRoutePageDomain,
  (routeData) => routeData.toJS().routeData.images
);

const selectRouteData = () => createSelector(
  selectRoutePageDomain,
  (routeData) => routeData.toJS().routeData.route
);


export {
  selectRoutePageDomain,
  selectRoutePageId,
  selectRouteData,
  selectImagesFromRoute,
};
