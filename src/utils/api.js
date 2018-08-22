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
  const GET_ID_USERS = ({userId}) => api.get(`users/${userId}`);
  const GET_ID_USER_ALBUMS = ({userId}) => api.get(`albums?userId=${userId}`);
  const GET_ID_USER_POSTS = ({userId}) => api.get(`posts?userId=${userId}`);
  const GET_ID_USER_POSTS_COMMENTS = ({postsId}) => api.get(`posts/${postsId}/comments`);
  const GET_ID_USER_ALBUM_PHOTOS = ({albumId}) => api.get(`photos?albumId=${albumId}`);

  const POST_USER_POSTS = (payload) => api.post(`posts`, payload);

	return {
		api,
		GET_USERS,
    GET_ID_USERS,
    GET_ID_USER_ALBUMS,
    GET_ID_USER_POSTS,
    GET_ID_USER_POSTS_COMMENTS,
    GET_ID_USER_ALBUM_PHOTOS,
    POST_USER_POSTS
	};
};

export default {
	create,
};
