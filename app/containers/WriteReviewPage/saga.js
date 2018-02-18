import { call, put, select, takeLatest } from "redux-saga/effects";
import request from 'utils/request';

import {
  LOCATION_LIST_ACTION,
  STATE_LOCATIONS_LOADING,
  GUIDE_LIST_ACTION,
  STATE_GUIDES_LOADING,
} from './constants';

import {
  locationListLoaded,
  locationListLoadingError,
  guideListLoaded,
  guideListLoadingError,
} from './actions';

export function* loadLocationList() {

  const requestURL = 'http://approach-server-1687250913.us-east-2.elb.amazonaws.com/location';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);

    yield put(locationListLoaded(data));
  } catch (err) {
    yield put(locationListLoadingError(err));
  }
}

export function* loadGuideList() {

  const requestURL = 'http://approach-server-1687250913.us-east-2.elb.amazonaws.com/guide/';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);

    yield put(guideListLoaded(data));
  } catch (err) {
    yield put(guideListLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* saga() {
  // Watches for LOAD_LOCATION_DATA actions and calls loadLocationData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOCATION_LIST_ACTION, loadLocationList);
  yield takeLatest(GUIDE_LIST_ACTION, loadGuideList);
}
