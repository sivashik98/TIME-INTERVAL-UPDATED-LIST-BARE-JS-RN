import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { FETCH_NEWS, REFRESH_DATA } from '../../constants/news';
import {
  fetchNewsFail,
  fetchNewsSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/news';
import { fetchHelper } from '../../../helpers/fetch';

function* fetchNewsWorker({}) {
  const path = '/posts?_start=0&_limit=25';

  try {
    const news = yield call(fetchHelper(path));

    yield delay(2500);

    yield put(fetchNewsSuccess(news));
  } catch (e) {
    yield put(fetchNewsFail());

    alert('Error fetching news');
  }
}

function* refreshDataWorker({ payload }) {
  const newsPath = '/posts?_start=0&_limit=25';

  try {
    const news = yield call(fetchHelper(newsPath));

    yield delay(2500);

    yield put(refreshDataSuccess({ news }));
  } catch (e) {
    yield put(refreshDataFail());

    alert('Error refreshing data');
  }
}

export default function* newsSaga() {
  yield all([
    takeLatest(FETCH_NEWS, fetchNewsWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}
