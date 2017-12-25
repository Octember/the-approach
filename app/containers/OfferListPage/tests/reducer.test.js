
import { fromJS } from 'immutable';
import offerListPageReducer from '../reducer';

describe('offerListPageReducer', () => {
  it('returns the initial state', () => {
    expect(offerListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
