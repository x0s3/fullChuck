import { combineReducers } from 'redux';
import { chuckReducer } from './chuck.reducer';

export const rootReducer = combineReducers({
  chuck: chuckReducer
});
