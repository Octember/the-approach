import { createSelector } from 'reselect';
import { OFFER_DOMAIN } from './constants';

/**
 * Direct selector to the offerDetailPage state domain
 */
const selectOfferDetailPageDomain = (state) => {
  console.log(state.toJS())
  return state.get(OFFER_DOMAIN);
}

/**
 * Other specific selectors
 */

const selectGuideDataForOfferDetail = () => createSelector(
  selectOfferDetailPageDomain,
  (offerPageState) => offerPageState.toJS().guideData
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
