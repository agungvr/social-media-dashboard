import {put, call, takeLatest, takeEvery, select} from 'redux-saga/effects';
import {
  commentsRequest,
  commentsSuccess,
  commentsFailure,
} from '../actions/comments';

export function* commentsRequestAsyncSaga(api, actions) {
  const {postsId} = actions.payload;
  const response = yield call(api.GET_ID_USER_POSTS_COMMENTS, {postsId});
  if (response.ok) {
    const result = {
      data: response.data
    };
    yield put(commentsSuccess({result, postsId}));
  } else {
    yield put(commentsFailure());
  }
}

export default function* commentsSaga(api) {
  yield takeEvery(commentsRequest, commentsRequestAsyncSaga, api);
}
