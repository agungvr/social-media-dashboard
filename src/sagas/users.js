import {put, call, takeLatest} from 'redux-saga/effects';
import {
  usersRequest,
  usersSuccess,
  usersFailure,
} from '../actions/users';
import {userDetailsRequest} from "../actions/app";

export function* usersRequestAsyncSaga(api, actions) {
  const {method, data} = actions.payload;
  const response = yield call(api[`${method}_USERS`], data);
  if (response.ok) {
    const result = {
      data: response.data, method
    };
    yield put(usersSuccess(result));
  } else {
    yield put(usersFailure());
  }
}

export default function* usersSaga(api) {
  yield takeLatest(usersRequest, usersRequestAsyncSaga, api);
  yield takeLatest(userDetailsRequest, usersRequestAsyncSaga, api);
}
