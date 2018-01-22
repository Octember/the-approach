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
    console.log(offerPageState.toJS())

    const guideData = offerPageState.toJS().tripData.guideData;

    return {
      image: guideData.image.url,
      guideName: guideData.guide.name,
      location: guideData.guide.location,
    };
  }
);


const selectOfferId = () => createSelector(
  selectTripDetailPageDomain,
  (offerState) => offerState.toJS().tripId
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
};
