import {handleActions} from 'redux-actions';
import {
  albumsRequest,
  albumsSuccess,
  albumsFailure,
} from '../actions/albums';
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
    [userDetailsRequest]: state => ({...state, fetching: true}),
    [albumsRequest]: (state) => ({...state, fetching: true}),
    [albumsSuccess]: (state, actions) => ({
      fetching: false, error: false, message: actions.message,
      payload: {
        list: actions.payload.data
      },
    }),
    [albumsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
