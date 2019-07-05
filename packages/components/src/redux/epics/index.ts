import { combineEpics, Epic } from 'redux-observable';
import chuckEpics from './chuck.epics';

export const rootEpic: Epic = combineEpics(...Object.values(chuckEpics));
