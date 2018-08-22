import { createAction } from 'redux-actions';

export const photosRequest = createAction('photos_REQUEST');
export const photosSuccess = createAction('photos_SUCCESS');
export const photosFailure = createAction('photos_FAILURE');
