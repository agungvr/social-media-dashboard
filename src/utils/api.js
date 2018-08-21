import apisauce from 'apisauce';

const create = (baseURL = 'https://jsonplaceholder.typicode.com/') => {
	const api = apisauce.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
		},
		timeout: 30000,
	});

	const GET_USERS = () => api.get('users');

	return {
		api,
		GET_USERS,
	};
};

export default {
	create,
};
