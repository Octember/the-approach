
import { fromJS } from 'immutable';
import routeReviewPageReducer from '../reducer';

describe('routeReviewPageReducer', () => {
  it('returns the initial state', () => {
    expect(routeReviewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
