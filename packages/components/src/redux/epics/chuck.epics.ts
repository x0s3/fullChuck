import { IJoke } from 'core/src';
import { Epic } from 'redux-observable';
import { from, of, pipe } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { actions } from './../actions/chuck.actions';

const fetchApi: Epic = (action$, store$, { getJSON, baseURL }) =>
  action$.pipe(
    filter(isActionOf(actions.fetchAsyncApi.request)),
    switchMap(action =>
      from(getJSON(`${baseURL}/random`)).pipe(
        map((joke: IJoke | any) => actions.fetchAsyncApi.success(joke)),
        catchError(
          pipe(
            actions.fetchAsyncApi.failure,
            of
          )
        ),
        takeUntil(
          action$.pipe(filter(isActionOf(actions.fetchAsyncApi.cancel)))
        )
      )
    )
  );

export default { fetchApi } as const;
