import {handleActions} from 'redux-actions';
import {
	usersRequest,
	usersSuccess,
	usersFailure,
} from '../actions/users';

export default handleActions({
	[usersRequest]: () => ({
		fetching: null, error: null, message: null,
	}),
	[usersSuccess]: (state, actions) => ({
		fetching: false, error: false, message: actions.message, payload: actions.payload,
	}),
	[usersFailure]: (state, actions) => ({
		fetching: false, error: true, message: actions.message,
	}),
}, {
	fetching: null,
	error: null,
	message: null,
});
