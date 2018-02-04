import { createSelector } from 'reselect';

/**
 * Direct selector to the guideProfilePage state domain
 */
const selectGuideProfilePageDomain = (state) => state.get('guideProfilePage');

/**
 * Other specific selectors
 */

const selectGuidePageId = () => createSelector(
  selectGuideProfilePageDomain,
  (state) => state.toJS().guideId
);

const selectGuideAPIData = () => createSelector(
  selectGuideProfilePageDomain,
  (state) => state.get('guideData')
);


const selectGuideData = () => createSelector(
  selectGuideProfilePageDomain,
  (state) => {
    const data = state.get('guideData').toJS();

    if (data.guide) {
      return {
        name: data.guide.guide.name,
      };
    } else {
      return {
        name: 'LOADING',
      };
    }
  }
);

/**
 * Default selector used by GuideProfilePage
 */

const makeSelectGuideProfilePage = () => createSelector(
  selectGuideProfilePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectGuideProfilePage;
export {
  selectGuidePageId,
  selectGuideData,
};
