import {put, call, takeLatest} from 'redux-saga/effects';
import {
  postsRequest,
  postsSuccess,
  postsFailure,
} from '../actions/posts';
import {userDetailsRequest} from "../actions/app";
import {commentsRequestAsyncSaga} from "./comments";

export function* postsRequestAsyncSaga(api, actions) {
  const {method, data} = actions.payload;
  const response = yield call(api[`${method}_USER_POSTS`], data);
  if (response.ok) {
    const result = {
      data: response.data,
      method
    };
    yield put(postsSuccess(result));
  } else {
    yield put(postsFailure());
  }
}

export default function* postsSaga(api) {
  yield takeLatest(postsRequest, postsRequestAsyncSaga, api);
  yield takeLatest(userDetailsRequest, postsRequestAsyncSaga, api);
}
