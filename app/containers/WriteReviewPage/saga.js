import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getRequest, postRequest } from 'utils/apiclient';

import {
  LOCATION_LIST_ACTION,
  GUIDE_LIST_ACTION,
  REVIEW_SUBMIT_REQUEST,
} from './constants';

import {
  locationListLoaded,
  locationListLoadingError,
  guideListLoaded,
  guideListLoadingError,
  reviewSubmissionSuccess,
  reviewSubmissionError,
} from './actions';

import { selectReviewData } from './selectors';

export function* loadLocationList() {
  const route = '/location';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(getRequest, route);

    yield put(locationListLoaded(data));
  } catch (err) {
    yield put(locationListLoadingError(err));
  }
}

export function* loadGuideList() {
  const route = '/guide';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(getRequest, route);

    yield put(guideListLoaded(data));
  } catch (err) {
    yield put(guideListLoadingError(err));
  }
}

export function* submitReview() {
  const route = '/api/v1/review';

  const reviewData = yield select(selectReviewData());

  try {
    const response = yield call(postRequest, route, reviewData);

    console.log(`Post review response: ${response}`);

    yield put(reviewSubmissionSuccess());
  } catch (err) {
    console.log(`Review submit error: ${err}`);

    yield put(reviewSubmissionError, err);
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
  yield takeLatest(REVIEW_SUBMIT_REQUEST, submitReview);
}
