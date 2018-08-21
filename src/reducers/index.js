import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';
import albums from './albums';

export default combineReducers({
	users,
  posts,
  albums,
});
