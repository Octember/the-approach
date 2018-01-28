import { createSelector } from 'reselect';

/**
 * Direct selector to the guideProfilePage state domain
 */
const selectGuideProfilePageDomain = (state) => state.get('guideProfilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GuideProfilePage
 */

const makeSelectGuideProfilePage = () => createSelector(
  selectGuideProfilePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectGuideProfilePage;
export {
  selectGuideProfilePageDomain,
};
