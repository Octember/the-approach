import { createSelector } from 'reselect';

/**
 * Direct selector to the offerListPage state domain
 */
const selectOfferListPageDomain = (state) => state.get('offerListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OfferListPage
 */

const makeSelectOfferListPage = () => createSelector(
  selectOfferListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectOfferListPage;
export {
  selectOfferListPageDomain,
};
