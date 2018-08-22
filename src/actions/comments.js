import { createAction } from 'redux-actions';

export const commentsRequest = createAction('COMMENTS_REQUEST');
export const commentsSuccess = createAction('COMMENTS_SUCCESS');
export const commentsFailure = createAction('COMMENTS_FAILURE');
