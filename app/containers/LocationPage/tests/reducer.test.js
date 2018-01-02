
import { fromJS } from 'immutable';
import locationPageReducer from '../reducer';

describe('locationPageReducer', () => {
  it('returns the initial state', () => {
    expect(locationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
