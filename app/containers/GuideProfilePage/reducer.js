/*
 *
 * GuideProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_GUIDE_PAGE_DATA, LOAD_GUIDE_PAGE_DATA_SUCCESS, LOAD_GUIDE_PAGE_DATA_ERROR, STATE_LOADING,
} from './constants';

const initialState = fromJS({
  guideData: fromJS({

  }),
});

function guideProfilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GUIDE_PAGE_DATA:
      return state
        .set('guideId', action.guideId)
        .set(STATE_LOADING, true);
    case LOAD_GUIDE_PAGE_DATA_SUCCESS:
      return state
        .set('guideData', fromJS(action.data))
        .set(STATE_LOADING, false);
    case LOAD_GUIDE_PAGE_DATA_ERROR:
      return state
        .set('error', action.error)
        .set(STATE_LOADING, false);
    default:
      return state;
  }
}

export default guideProfilePageReducer;
