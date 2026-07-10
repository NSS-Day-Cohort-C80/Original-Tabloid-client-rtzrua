const _apiUrl = "/api/reaction";

export const addReaction = (emoji, postId) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emoji, postId }),
  }).then((res) => res.json());
};

export const getReactionCounts = (postId) => {
  return fetch(`${_apiUrl}/counts/${postId}`).then((res) => res.json());
};