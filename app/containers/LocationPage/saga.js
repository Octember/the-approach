import { takeLatest, call, put, select } from 'redux-saga/effects';

import { LOAD_ROUTE_DATA } from 'containers/LocationPage/constants';
import { locationDataLoaded, locationDataLoadingError } from 'containers/LocationPage/actions';

import request from 'utils/request';
import { selectLocationPageId } from 'containers/LocationPage/selectors';

/**
 * Github repos request/response handler
 */
export function* loadRouteData() {

  // Select username from store
  const locationId = yield select(selectLocationPageId());

  console.log(`url: http://localhost:8888/location_page/${locationId}`);

  const requestURL = `http://approach-server-1687250913.us-east-2.elb.amazonaws.com/location_page/${locationId}`;

  //http://

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
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
  // Watches for LOAD_ROUTE_DATA actions and calls loadRouteData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ROUTE_DATA, loadRouteData);
}
