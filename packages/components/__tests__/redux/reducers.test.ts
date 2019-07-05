import { actions } from '../../src/redux/actions/chuck.actions';
import { chuckReducer } from '../../src/redux/reducers/chuck.reducer';

describe('REDUX REDUCERS TEST', () => {
  it('should create reducer with initial state correctly and add a joke success', () => {
    expect(chuckReducer(undefined, actions.fetchAsyncApi.success({}))).toEqual({
      isFetching: false,
      joke: {},
      jokes: []
    });
  });

  it('should create reducer with initial state correctly and change isFetching to true', () => {
    expect(chuckReducer(undefined, actions.fetchAsyncApi.request())).toEqual({
      isFetching: true,
      joke: {},
      jokes: []
    });
  });
});
