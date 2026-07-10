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

export const getMyPosts = () => {
  return fetch(`${_apiUrl}/myposts`).then((res) => res.json());
};

export const updatePost = (post) => {
  return fetch(`${_apiUrl}/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export const createPost = (post) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

export const getPendingPosts = () => {
  return fetch(`${_apiUrl}/pending`).then((res) => res.json());
};

export const approvePost = (id) => {
  return fetch(`${_apiUrl}/approve/${id}`, {
    method: "PUT",
  });
};
