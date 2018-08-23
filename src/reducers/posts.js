import {handleActions} from 'redux-actions';
import {
  postsRequest,
  postsSuccess,
  postsFailure,
} from '../actions/posts';
import {userDetailsRequest} from "../actions/app";

const initialState = {
  blocking: false,
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
    [postsRequest]: (state, actions) => ({...state, fetching: true, blocking: actions.payload.blocking && true}),
    [postsSuccess]: (state, actions) => {
      switch (actions.payload.method){
        case 'GET_ID':
          return {
            fetching: false, error: false, message: actions.message, blocking: false,
            payload: {
              list: actions.payload.data
            },
            lastUpdate: new Date()
          };
          break;
        default:
          return {
            ...state, fetching: false, error: false, message: actions.message, blocking: false
          };
          break;
      }
    },
    [postsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
