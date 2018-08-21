import { createAction } from 'redux-actions';

export const usersRequest = createAction('USERS_REQUEST');
export const usersSuccess = createAction('USERS_SUCCESS');
export const usersFailure = createAction('USERS_FAILURE');
