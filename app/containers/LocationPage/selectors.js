import { createSelector } from 'reselect';

/**
 * Direct selector to the locationPage state domain
 */
const selectLocationPageDomain = (state) => state.get('locationPage');

/**
 * Other specific selectors
 */

const selectLocationPageId = () => createSelector(
  selectLocationPageDomain,
  (routeState) => routeState.toJS().locationId
);

const selectImagesFromLocation = () => createSelector(
  selectLocationPageDomain,
  (routeData) => routeData.toJS().routeData.images
);

const selectLocationData = () => createSelector(
  selectLocationPageDomain,
  (routeData) => routeData.toJS().routeData.route
);


export {
  selectLocationPageDomain,
  selectLocationPageId,
  selectLocationData,
  selectImagesFromLocation,
};
