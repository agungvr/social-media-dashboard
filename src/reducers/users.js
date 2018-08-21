import {handleActions} from 'redux-actions';
import {
  usersRequest,
  usersSuccess,
  usersFailure,
} from '../actions/users';
import {
  userDetailsRequest
} from "../actions/app";

const initialState = {
  fetching: null,
  error: null,
  message: null,
  payload: {
    list: null,
    selected: null
  }
};

export default handleActions(
  {
    [userDetailsRequest]: (state) => ({...state, fetching: true}),
    [usersRequest]: (state) => ({ ...state, fetching: true}),
    [usersSuccess]: (state, actions) => {
      const {payload, message} = actions;
      const {list, selected} = state.payload;
      return {
        fetching: false, error: false, message,
        payload: {
          list: payload.method === "GET" ? payload.data : list,
          selected: payload.method === "GET_ID" ? payload.data : selected
        }
      }
    },
    [usersFailure]: (state, actions) => ({
      ...state, fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
