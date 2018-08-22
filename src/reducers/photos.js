import {handleActions} from 'redux-actions';
import {
  photosRequest,
  photosSuccess,
  photosFailure,
} from '../actions/photos';

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
    [photosRequest]: (state) => ({...state, fetching: true}),
    [photosSuccess]: (state, actions) => ({
      fetching: false, error: false, message: actions.message,
      payload: {
        list: actions.payload.data
      },
    }),
    [photosFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
