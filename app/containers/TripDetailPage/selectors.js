import { createSelector } from 'reselect';
import { TRIP_DOMAIN } from './constants';

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

const selectTripForTripPage = () => createSelector(
  selectTripDetailPageDomain,
  (offerPageState) => offerPageState.toJS().tripData.trip
);

const selectLocationDataForTripPage = () => createSelector(
  selectTripDetailPageDomain,
  (offerPageState) => offerPageState.toJS().tripData.locationData
);

const selectReviews = () => createSelector(
  selectTripDetailPageDomain,
  (locationData) => locationData.toJS().tripData.reviews
);

/**
 * Default selector used by TripDetailPage
 */

export {
  selectTripDetailPageDomain,
  selectOfferId,
  selectGuideDataForOfferDetail,
  selectTripForTripPage,
  selectLocationDataForTripPage,
  selectReviews,
};
