import { IJoke } from 'core/src';
import { RootState } from 'typesafe-actions';

export const isFetching = (state: RootState): boolean => state.chuck.isFetching;

export const getJoke = (state: RootState): IJoke => state.chuck.joke || {};

export const getJokes = (state: RootState): IJoke[] => state.chuck.jokes || [];
