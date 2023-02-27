import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { FETCH_POST, REFRESH_DATA } from '../../constants/post';
import {
  fetchPostFail,
  fetchPostSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/post';

import { fetchHelper } from '../../../helpers/fetch';

function* fetchPostWorker({ payload }) {
  const { id } = payload;
  const path = `/posts/${id}`;

  try {
    const post = yield call(fetchHelper(path));

    yield delay(2500);

    yield put(fetchPostSuccess(post));
  } catch (e) {
    yield put(fetchPostFail());

    alert('Error fetching post');
  }
}

function* refreshDataWorker({ payload }) {
  const { id } = payload;
  const postPath = `/posts/${id}`;

  try {
    const post = yield call(fetchHelper(postPath));

    yield delay(2500);

    yield put(refreshDataSuccess({ post }));
  } catch (e) {
    yield put(refreshDataFail());

    alert('Error refreshing data');
  }
}

export default function* restaurantSaga() {
  yield all([
    takeLatest(FETCH_POST, fetchPostWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}
