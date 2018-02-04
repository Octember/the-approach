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

/*
 * Default selector used by GuideProfilePage
 */

export {
  selectGuidePageId,
  selectGuideData,
};
