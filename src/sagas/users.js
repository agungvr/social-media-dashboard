import {put, call, takeLatest} from 'redux-saga/effects';
import {
	usersRequest,
	usersSuccess,
	usersFailure,
} from '../actions/users';

export function* usersRequestAsyncSaga(api, actions) {
	const response = yield call(api.GET_USERS);
	if (response.ok) {
		yield put(usersSuccess(response.data));
	} else {
		yield put(usersFailure());
	}
}

export default function* usersSaga(api) {
	yield takeLatest(usersRequest, usersRequestAsyncSaga, api);
}
