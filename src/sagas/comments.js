import {put, call, takeLatest, takeEvery, select} from 'redux-saga/effects';
import {
  commentsRequest,
  commentsSuccess,
  commentsFailure,
} from '../actions/comments';

export function* commentsRequestAsyncSaga(api, actions) {
  const {method, data} = actions.payload;
  const response = yield call(api[`${method}_USER_POSTS_COMMENTS`], data);
  if (response.ok) {
    const result = {
      data: response.data
    };
    yield put(commentsSuccess({result, data, method}));
  } else {
    yield put(commentsFailure());
  }
}

export default function* commentsSaga(api) {
  yield takeEvery(commentsRequest, commentsRequestAsyncSaga, api);
}
