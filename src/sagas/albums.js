import {put, call, takeLatest} from 'redux-saga/effects';
import {
  albumsRequest,
  albumsSuccess,
  albumsFailure,
} from '../actions/albums';
import {userDetailsRequest} from "../actions/app";

export function* albumsRequestAsyncSaga(api, actions) {
  const {method, data} = actions.payload;
  const response = yield call(api[`${method}_USER_ALBUMS`], data);
  if (response.ok) {
    const result = {
      data: response.data, method
    };
    yield put(albumsSuccess(result));
  } else {
    yield put(albumsFailure());
  }
}

export default function* albumsSaga(api) {
  yield takeLatest(albumsRequest, albumsRequestAsyncSaga, api);
  yield takeLatest(userDetailsRequest, albumsRequestAsyncSaga, api);
}
