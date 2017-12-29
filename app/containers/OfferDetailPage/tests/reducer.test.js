
import { fromJS } from 'immutable';
import offerDetailPageReducer from '../reducer';

describe('offerDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(offerDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
