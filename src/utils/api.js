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
  const GET_ID_USER_ALBUM_PHOTOS = ({albumId}) => api.get(`photos?albumId=${albumId}`);

  const GET_ID_USER_POSTS = ({userId}) => api.get(`posts?userId=${userId}`);
  const POST_USER_POSTS = (payload) => api.post(`posts`, payload);
  const PUT_USER_POSTS = ({postsId, payload}) => api.put(`posts/${postsId}`, payload);
  const DELETE_USER_POSTS = ({postId}) => api.delete(`posts/${postId}`);

  const GET_ID_USER_POSTS_COMMENTS = ({postsId}) => api.get(`posts/${postsId}/comments`);
  const POST_USER_POSTS_COMMENTS = (payload) => api.post(`comments`, payload);
  const PUT_USER_POSTS_COMMENTS = ({commentId, payload}) => api.put(`comments/${commentId}`, payload);
  const DELETE_USER_POSTS_COMMENTS = ({postsId}) => api.delete(`comments/${postsId}`);

	return {
		api,
		GET_USERS,
    GET_ID_USERS,
    GET_ID_USER_ALBUMS,
    GET_ID_USER_POSTS,
    GET_ID_USER_POSTS_COMMENTS,
    GET_ID_USER_ALBUM_PHOTOS,
    POST_USER_POSTS,
    PUT_USER_POSTS,
    POST_USER_POSTS_COMMENTS,
    DELETE_USER_POSTS,
    PUT_USER_POSTS_COMMENTS,
    DELETE_USER_POSTS_COMMENTS
	};
};

export default {
	create,
};
