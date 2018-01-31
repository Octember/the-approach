
import { fromJS } from 'immutable';
import writeReviewPageReducer from '../reducer';

describe('writeReviewPageReducer', () => {
  it('returns the initial state', () => {
    expect(writeReviewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
