import { createSelector } from 'reselect';
import { STATE_ROUTE_DATA } from './constants';

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
  (routeData) => {
    // console.log(routeData.toJS())
    //
    // console.log(routeData.toJS().routeData)
    //
    console.log("images: ")
    // if (routeData.toJS().routeData) {
    console.log(routeData.toJS().routeData.images)
    // }


    // console.log(routeData.get(STATE_ROUTE_DATA).get('images'))
    // return routeData.get(STATE_ROUTE_DATA).images;
    return routeData.toJS().routeData.images
  }
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
