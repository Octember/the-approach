
import {
  LOCATION_LIST_ACTION, STATE_LOCATIONS_LOADING
} from './constants';
import { call, put, select, takeLatest } from "redux-saga/effects";
import request from 'utils/request';
import { locationListLoaded, locationListLoadingError } from './actions';

export function* loadLocationList() {

  const requestURL = 'http://localhost:8888/location';
  // const requestURL = 'http://approach-server-1687250913.us-east-2.elb.amazonaws.com/location';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    // console.log("Saga response:");
    // console.log(data);
    yield put(locationListLoaded(data));
  } catch (err) {
    yield put(locationListLoadingError(err));
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
}
