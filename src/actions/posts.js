import { createAction } from 'redux-actions';

export const postsRequest = createAction('POSTS_REQUEST');
export const postsSuccess = createAction('POSTS_SUCCESS');
export const postsFailure = createAction('POSTS_FAILURE');
