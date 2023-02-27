import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { fetchHelper } from '../../../helpers/fetch';
import { FETCH_USER, REFRESH_DATA } from '../../constants/profile';
import {
  fetchUserFail,
  fetchUserSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/profile';

function* fetchUserWorker({ payload }) {
  const path = '/users/1';

  try {
    const user = yield call(fetchHelper(path));

    yield delay(2500);

    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFail());

    alert('Error fetching user');
  }
}

function* refreshDataWorker({ payload }) {
  const userPath = '/users/1';

  try {
    const user = yield call(fetchHelper(userPath));

    yield delay(2500);

    yield put(refreshDataSuccess({ user }));
  } catch (e) {
    yield put(refreshDataFail());

    alert('Error refreshing data');
  }
}

export default function* profileSaga() {
  yield all([
    takeLatest(FETCH_USER, fetchUserWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}
