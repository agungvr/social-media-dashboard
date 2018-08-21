import { createAction } from 'redux-actions';

export const albumsRequest = createAction('ALBUMS_REQUEST');
export const albumsSuccess = createAction('ALBUMS_SUCCESS');
export const albumsFailure = createAction('ALBUMS_FAILURE');
