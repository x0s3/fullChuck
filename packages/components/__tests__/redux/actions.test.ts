import { IJoke } from 'core';
import { actions as chuckActions } from '../../src/redux/actions/chuck.actions';

describe('REDUX ACTIONS TESTS', () => {
  it('should create request fetch async api action success', () => {
    const expectedAction = { type: 'FETCH_API_REQUEST' };
    expect(chuckActions.fetchAsyncApi.request()).toEqual(expectedAction);
  });

  it('should create success fetch async api action success', () => {
    const expectedAction = { type: 'FETCH_API_SUCCESS', payload: {} };
    const payload: IJoke = {};
    expect(chuckActions.fetchAsyncApi.success(payload)).toEqual(expectedAction);
  });

  it('should create failure fetch async api action success', () => {
    const expectedAction = { type: 'FETCH_API_ERROR', payload: 'error' };
    expect(chuckActions.fetchAsyncApi.failure('error')).toEqual(expectedAction);
  });

  it('should create cancel fetch async api action success', () => {
    const expectedAction = { type: 'FETCH_API_CANCEL' };
    expect(chuckActions.fetchAsyncApi.cancel()).toEqual(expectedAction);
  });
});
