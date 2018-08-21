import { fork } from 'redux-saga/effects';
import ApiTampan from './../utils/api';
import usersSaga from './users';

const api = ApiTampan.create();

export default function* rootSaga() {
	yield fork(usersSaga, api);
}
