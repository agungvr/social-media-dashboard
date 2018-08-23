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
      const {result, data, method} = actions.payload;
      switch (method){
        case 'GET_ID':
          return {
            fetching: false, error: false, message: actions.message,
            payload: {
              ...state.payload,
              [data.postsId]: result.data
            }
          };
          break;
        default:
          return {
            ...state, fetching: false, error: false, message: actions.message,
          };
          break;
      }
    },
    [commentsFailure]: (state, actions) => ({
      fetching: false, error: true, message: actions.message,
    }),
  },
  {...initialState}
);
