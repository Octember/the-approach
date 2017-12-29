import { createSelector } from 'reselect';

/**
 * Direct selector to the offerDetailPage state domain
 */
const selectOfferDetailPageDomain = (state) => state.get('offerDetailPage');

/**
 * Other specific selectors
 */


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
};
