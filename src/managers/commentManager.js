const _apiUrl = "/api/comment";

export const getCommentsByPost = (postId) => {
  return fetch(`${_apiUrl}/byPost/${postId}`).then((res) => res.json());
};