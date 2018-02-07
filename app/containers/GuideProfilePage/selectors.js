import { createSelector } from 'reselect';
import {
  STATE_LOADING,
} from './constants';

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
        location: data.guide.guide.location,
        aboutInfo: data.guide.guide.aboutInfo,
        url: data.guide.image.url,  // URL for logo image
        photos: data.images,  // Guide's array of pictures
        adventures: data.trips,    // Guide's array of available planned trips (labelled "Adventures") on page
        stats: [
          { label: 'Followers', count: 0 },  // Need a way to caclulate followers count
          { label: 'Photos', count: data.images.length },
          { label: 'Adventures', count: data.trips.length },
          { label: 'Trip Reports', count: 0 } // Need a way to calculate reports count
        ],
      };
    } else {
      return {
        isLoading: true,
      };
    }
  }
);

const selectIsLoading = () => createSelector(
  selectGuideProfilePageDomain,
  (state) => {
    return state.get(STATE_LOADING);
  }
);

/*
 * Default selector used by GuideProfilePage
 */

export {
  selectGuidePageId,
  selectGuideData,
  selectIsLoading,
};
