/*
 *
 * OfferDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_OFFER_DATA, LOAD_OFFER_DATA_ERROR, LOAD_OFFER_DATA_SUCCESS, OFFER_DOMAIN, STATE_LOADING
} from './constants';

const initialState = fromJS({
  offerDetailPage: {
  },
});

function offerDetailPageReducer(state = initialState, action) {
  console.log(`Offer reducer: ${action.type}`);
  switch (action.type) {
    case LOAD_OFFER_DATA:
      return state
        .set('offerId', action.offerId)
        .set(STATE_LOADING, true);
    case LOAD_OFFER_DATA_SUCCESS:
      return state
        .set('offerId', action.offerId)
        .set(OFFER_DOMAIN, action.offerData)
        .set(STATE_LOADING, false);
    case LOAD_OFFER_DATA_ERROR:
      return state
        .set('error', action.error)
        .set(STATE_LOADING, false);
    default:
      return state;
  }
}

export default offerDetailPageReducer;
