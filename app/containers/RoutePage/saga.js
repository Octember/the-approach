import { takeLatest, call, put, select } from 'redux-saga/effects';

import { LOAD_ROUTE_DATA } from 'containers/RoutePage/constants';
import { routeDataLoaded, routeDataLoadingError } from 'containers/RoutePage/actions';

import request from 'utils/request';
import { selectRoutePageId } from 'containers/RoutePage/selectors';

/**
 * Github repos request/response handler
 */
export function* loadRouteData() {

  // Select username from store
  const routeId = yield select(selectRoutePageId());

  console.log(`url: http://localhost:8888/route_page/${routeId}`);

  const requestURL = `http://localhost:8888/route_page/${routeId}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    console.log("Saga response:");
    console.log(data);
    yield put(routeDataLoaded(data, routeId));
  } catch (err) {
    yield put(routeDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* routeData() {
  // Watches for LOAD_ROUTE_DATA actions and calls loadRouteData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ROUTE_DATA, loadRouteData);
}
