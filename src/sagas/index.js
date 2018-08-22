import {fork} from 'redux-saga/effects';
import ApiTampan from './../utils/api';
import usersSaga from './users';
import postsSaga from './posts';
import commentsSaga from './comments'
import albumsSaga from './albums';
import photosSaga from './photos';

const api = ApiTampan.create();

export default function* rootSaga() {
  yield fork(usersSaga, api);
  yield fork(postsSaga, api);
  yield fork(commentsSaga, api);
  yield fork(albumsSaga, api);
  yield fork(photosSaga, api);
}
