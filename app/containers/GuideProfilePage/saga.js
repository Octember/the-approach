import { takeLatest, call, put, select } from 'redux-saga/effects';
import { guidePageLoadingError, guidePageLoaded } from './actions';
import { selectGuidePageId } from './selectors';
import { LOAD_GUIDE_PAGE_DATA } from './constants';
import { getRequest } from 'utils/apiclient';

export function* loadGuideProfile() {
  const guideId = yield select(selectGuidePageId());

  const requestURL = `/guide_page/${guideId}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(getRequest, requestURL);
    // console.log("Saga response:");
    // console.log(data);
    yield put(guidePageLoaded(data));
  } catch (err) {
    yield put(guidePageLoadingError(err));
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
  yield takeLatest(LOAD_GUIDE_PAGE_DATA, loadGuideProfile);
}
