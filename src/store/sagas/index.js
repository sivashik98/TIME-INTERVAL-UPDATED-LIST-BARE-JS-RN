import {all} from 'redux-saga/effects';

import news from './news';
import profile from './profile';
import post from './post';

export default function* rootSaga() {
  yield all([news(), profile(), post()]);
}
