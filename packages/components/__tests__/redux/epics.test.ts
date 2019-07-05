import { ActionsObservable } from 'redux-observable';
import { of, throwError } from 'rxjs';
import { actions } from '../../src/redux/actions/chuck.actions';
import chuckEpicActions from '../../src/redux/epics/chuck.epics';

// TODO fix Epic compability with these tests
describe('REDUX EPIC ACTIONS', () => {
  it('dispatches the correct actions when it is successful', () => {
    const action$ = ActionsObservable.of(actions.fetchAsyncApi.request());
    const getJSON = () => of({});
    const baseURL = `https://api.chucknorris.io/jokes`;
    chuckEpicActions
      .fetchApi(action$, null, {
        getJSON,
        baseURL
      })
      .subscribe((actualOutputActions: any) =>
        expect(actualOutputActions).toEqual(actions.fetchAsyncApi.success({}))
      );
  });

  it('dispatches the correct actions when it is an error', () => {
    const action$ = ActionsObservable.of(actions.fetchAsyncApi.request());
    const getJSON = () => throwError('error');
    const baseURL = `https://api.chucknorris.io/jokes`;
    chuckEpicActions
      .fetchApi(action$, null, {
        getJSON,
        baseURL
      })
      .subscribe((actualOutputActions: any) =>
        expect(actualOutputActions).toEqual(
          actions.fetchAsyncApi.failure('error')
        )
      );
  });

  it('dispatches the correct actions when it is a cancel', async () => {
    const actions$ = ActionsObservable.of(
      actions.fetchAsyncApi.request(),
      actions.fetchAsyncApi.cancel()
    );

    return actions$.toPromise().then((actionReceived: any) => {
      expect(actionReceived.type).toBe(actions.fetchAsyncApi.cancel().type);
    });
  });
});
