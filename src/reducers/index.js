import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';
import comments from './comments';
import albums from './albums';

export default combineReducers({
	users,
  posts,
  comments,
  albums,
});
