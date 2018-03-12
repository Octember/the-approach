import { takeLatest, call, put, select } from 'redux-saga/effects';

import { selectOfferId } from './selectors';
import { tripDataLoaded, tripDataLoadingError } from './actions';
import { LOAD_TRIP_DATA } from "./constants";
import { getRequest } from 'utils/apiclient';

export function* loadOfferData() {
  // Select username from store
  const tripId = yield select(selectOfferId());

  const requestURL = `/trip_page/${tripId}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(getRequest, requestURL);
    // console.log("Saga response:");
    // console.log(data);
    yield put(tripDataLoaded(data, tripId));
  } catch (err) {
    yield put(tripDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* tripData() {
  // Watches for LOAD_TRIP_DATA actions and calls loadOfferData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TRIP_DATA, loadOfferData);
}
