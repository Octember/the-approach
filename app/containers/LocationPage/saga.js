import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getRequest } from 'utils/apiclient';
import { selectLocationPageId } from './selectors';
import { LOAD_LOCATION_DATA } from './constants';
import { locationDataLoaded, locationDataLoadingError } from './actions';

export function* loadLocationData() {

  // Select username from store
  const locationId = yield select(selectLocationPageId());


  const requestURL = `/location_page/${locationId}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(getRequest, requestURL);
    console.log("Saga response:");
    console.log(data);
    yield put(locationDataLoaded(data, locationId));
  } catch (err) {
    yield put(locationDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* locationData() {
  // Watches for LOAD_LOCATION_DATA actions and calls loadLocationData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_LOCATION_DATA, loadLocationData);
}
