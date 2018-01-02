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
  (locationData) => locationData.toJS().locationData.images
);

const selectLocationData = () => createSelector(
  selectLocationPageDomain,
  (locationData) => locationData.toJS().locationData.location
);


export {
  selectLocationPageDomain,
  selectLocationPageId,
  selectLocationData,
  selectImagesFromLocation,
};