import { IJoke } from 'core/src';
import { createReducer, RootAction } from 'typesafe-actions';
import { actions } from '../actions/chuck.actions';

export interface IChuckInitialState {
  readonly isFetching: boolean;
  readonly joke?: IJoke;
  readonly jokes?: IJoke[];
}

export const chuckReducer = createReducer<IChuckInitialState, RootAction>({
  isFetching: false,
  joke: {},
  jokes: []
})
  .handleAction(actions.fetchAsyncApi.success, (state, action) => ({
    ...state,
    isFetching: !state.isFetching,
    joke: { ...action.payload }
  }))
  .handleAction(actions.fetchAsyncApi.request, (state, _) => ({
    ...state,
    isFetching: true
  }));
