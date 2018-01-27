import { createSelector } from 'reselect';
import { TRIP_DOMAIN, TRIP_API_DATA_DOMAIN } from './constants';

/**
 * Direct selector to the offerDetailPage state domain
 */
const selectTripDetailPageDomain = (state) => {
  return state.get(TRIP_DOMAIN);
};


/**
 * Other specific selectors
 */

const selectGuideDataForOfferDetail = () => createSelector(
  selectTripDetailPageDomain,
  (offerPageState) => {
    const guideData = offerPageState.toJS().tripData.guideData;

    return {
      image: guideData.image.url,
      guideName: guideData.guide.name,
      location: guideData.guide.location,
      description: guideData.guide.aboutInfo
    };
  }
);


const selectOfferId = () => createSelector(
  selectTripDetailPageDomain,
  (offerState) => offerState.toJS().tripId
);

const selectTripForOfferDetail = () => createSelector(
  selectTripDetailPageDomain,
  (offerPageState) => offerPageState.toJS().tripData.trip
);

const selectLocationDataForOfferDetail = () => createSelector(
  selectTripDetailPageDomain,
  (offerPageState) => offerPageState.toJS().tripData.locationData
);

/**
 * Default selector used by TripDetailPage
 */

const makeSelectTripDetailPage = () => createSelector(
  selectTripDetailPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectTripDetailPage;
export {
  selectTripDetailPageDomain,
  selectOfferId,
  selectGuideDataForOfferDetail,
  selectTripForOfferDetail,
  selectLocationDataForOfferDetail,
};
