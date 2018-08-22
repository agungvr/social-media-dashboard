import {handleActions} from 'redux-actions';
import {
  commentsRequest,
  commentsSuccess,
  commentsFailure,
} from '../actions/comments';

const initialState = {
  fetching: null,
  error: null,
  message: null,
  payload: null
};

export default handleActions(
  {
    [commentsRequest]: (state) => ({...state, fetching: true}),
    [commentsSuccess]: (state, actions) => {
      const {result, postsId} = actions.payload;
      return {
        fetching: false, error: false, message: actions.message,
        payload: {
          ...state.payload,
          [postsId]: result.data
        }
      }
    },
    [commentsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
