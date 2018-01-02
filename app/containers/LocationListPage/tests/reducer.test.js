
import { fromJS } from 'immutable';
import routeListPageReducer from '../reducer';

describe('routeListPageReducer', () => {
  it('returns the initial state', () => {
    expect(routeListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
