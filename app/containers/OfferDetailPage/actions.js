/*
 *
 * OfferDetailPage actions
 *
 */

import {
  LOAD_OFFER_DATA, LOAD_OFFER_DATA_ERROR, LOAD_OFFER_DATA_SUCCESS
} from './constants';

export function loadOfferPage(offerId) {
  console.log('Load offer page action with offer id ' + offerId)
  return {
    type: LOAD_OFFER_DATA,
    offerId,
  };
}

export function offerDataLoaded(offerData, offerId) {
  return {
    type: LOAD_OFFER_DATA_SUCCESS,
    offerData,
    offerId,
  };
}

export function offerDataLoadingError(error) {
  console.log("error " + error)
  return {
    type: LOAD_OFFER_DATA_ERROR,
    error,
  };
}
