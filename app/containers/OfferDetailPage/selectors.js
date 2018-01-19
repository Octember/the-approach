import { createSelector } from 'reselect';
import { OFFER_DOMAIN, OFFER_API_DATA_DOMAIN } from './constants';

/**
 * Direct selector to the offerDetailPage state domain
 */
const selectOfferDetailPageDomain = (state) => {
  return state.get(OFFER_DOMAIN);
};


/**
 * Other specific selectors
 */

const selectGuideDataForOfferDetail = () => createSelector(
  selectOfferDetailPageDomain,
  (offerPageState) => {
    console.log(offerPageState.toJS())

    const guideData = offerPageState.toJS().offerData.guideData;

    return {
      image: guideData.image.url,
      guideName: guideData.guide.name,
      location: guideData.guide.location,
    };
  }
);


const selectOfferId = () => createSelector(
  selectOfferDetailPageDomain,
  (offerState) => offerState.toJS().offerId
);


/**
 * Default selector used by OfferDetailPage
 */

const makeSelectOfferDetailPage = () => createSelector(
  selectOfferDetailPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectOfferDetailPage;
export {
  selectOfferDetailPageDomain,
  selectOfferId,
  selectGuideDataForOfferDetail,
};
