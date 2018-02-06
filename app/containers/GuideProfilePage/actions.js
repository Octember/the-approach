/*
 *
 * GuideProfilePage actions
 *
 */

import {
  LOAD_GUIDE_PAGE_DATA,
  LOAD_GUIDE_PAGE_DATA_SUCCESS,
  LOAD_GUIDE_PAGE_DATA_ERROR,
} from './constants';

export const requestGuideProfile = (guideId) => ({
  type: LOAD_GUIDE_PAGE_DATA,
  guideId,
});


export const guidePageLoaded = (data) => ({
  type: LOAD_GUIDE_PAGE_DATA_SUCCESS,
  data,
});

export const guidePageLoadingError = (error) => ({
  type: LOAD_GUIDE_PAGE_DATA_ERROR,
  error,
});
