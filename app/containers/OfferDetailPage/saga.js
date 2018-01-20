import { takeLatest, call, put, select } from 'redux-saga/effects';

import { selectOfferId } from './selectors';
import { offerDataLoaded, offerDataLoadingError } from './actions';
import { LOAD_OFFER_DATA } from "./constants";
import request from 'utils/request';

export function* loadOfferData() {
  // Select username from store
  const offerId = yield select(selectOfferId());

  const requestURL = `http://approach-server-1687250913.us-east-2.elb.amazonaws.com/offer_page/${offerId}`;

  console.log(`url: ${requestURL}`);

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    console.log("Saga response:");
    console.log(data);
    yield put(offerDataLoaded(data, offerId));
  } catch (err) {
    yield put(offerDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* offerData() {
  // Watches for LOAD_OFFER_DATA actions and calls loadOfferData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_OFFER_DATA, loadOfferData);
}
