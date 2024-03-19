import { put, call, take, error } from 'redux-saga/effects';

export function* incrementAsync() {
  try {
    const result = yield call(incrementAsync);
    yield put({ type: 'INCREMENT_ASYNC', payload: result });
  } catch (err) {
    yield error(err);
  }
}
