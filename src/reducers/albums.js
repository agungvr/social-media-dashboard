import {handleActions} from 'redux-actions';
import {
  albumsRequest,
  albumsSuccess,
  albumsFailure,
} from '../actions/albums';

const initialState = {
  fetching: null,
  error: null,
  message: null,
  payload: null
};

export default handleActions(
  {
    [albumsRequest]: () => ({
      fetching: null, error: null, message: null,
    }),
    [albumsSuccess]: (state, actions) => ({
      fetching: false, error: false, message: actions.message, payload: actions.payload,
    }),
    [albumsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
