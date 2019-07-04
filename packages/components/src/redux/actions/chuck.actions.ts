import { IJoke } from 'core/src';
import { createAsyncAction } from 'typesafe-actions';

const fetchAsyncApi = createAsyncAction(
  'FETCH_API_REQUEST',
  'FETCH_API_SUCCESS',
  'FETCH_API_ERROR',
  'FETCH_API_CANCEL'
)<undefined, IJoke, string, undefined>();

export const actions = {
  fetchAsyncApi
};
