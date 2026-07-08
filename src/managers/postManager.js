const _apiUrl = "/api/post";

export const getAllPosts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getPostById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const deletePost = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export const getPostsByUser = (userProfileId) => {
  return fetch(`${_apiUrl}/byuser/${userProfileId}`).then((res) => res.json());
};