import {handleActions} from 'redux-actions';
import {
  postsRequest,
  postsSuccess,
  postsFailure,
} from '../actions/posts';
import {userDetailsRequest} from "../actions/app";

const initialState = {
  fetching: null,
  error: null,
  message: null,
  payload: {
    list: null
  }
};

export default handleActions(
  {
    [userDetailsRequest]: (state) => ({...state, fetching: true}),
    [postsRequest]: (state) => ({...state, fetching: true}),
    [postsSuccess]: (state, actions) => ({
      fetching: false, error: false, message: actions.message,
      payload: {
        list: actions.payload.data
      },
    }),
    [postsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
