import {put, call, takeLatest} from 'redux-saga/effects';
import {
  photosRequest,
  photosSuccess,
  photosFailure,
} from '../actions/photos';

export function* photosRequestAsyncSaga(api, actions) {
  const {method, albumId} = actions.payload;
  const response = yield call(api[`${method}_USER_ALBUM_PHOTOS`], {albumId});
  if (response.ok) {
    const result = {
      data: response.data, method
    };
    yield put(photosSuccess(result));
  } else {
    yield put(photosFailure());
  }
}

export default function* photosSaga(api) {
  yield takeLatest(photosRequest, photosRequestAsyncSaga, api);
}
