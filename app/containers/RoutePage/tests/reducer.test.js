
import { fromJS } from 'immutable';
import routePageReducer from '../reducer';

describe('routePageReducer', () => {
  it('returns the initial state', () => {
    expect(routePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
