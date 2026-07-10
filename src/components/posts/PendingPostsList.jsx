import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPendingPosts, approvePost } from "../../managers/postManager";

export default function PendingPostsList() {
  const [posts, setPosts] = useState([]);

  const loadPendingPosts = () => {
    getPendingPosts().then(setPosts);
  };

  useEffect(() => {
    loadPendingPosts();
  }, []);

  const handleApprove = (id) => {
    approvePost(id).then(() => {
      loadPendingPosts();
    });
  };

  return (
    <>
      <p>Pending Posts</p>
      {posts.length === 0 ? (
        <p>No posts awaiting approval.</p>
      ) : (
        posts.map((post) => (
          <p key={post.id}>
            {post.title} — {post.category}{" "}
            <Link to={`/posts/${post.id}`}>Details</Link>{" "}
            <button onClick={() => handleApprove(post.id)}>Approve</button>
          </p>
        ))
      )}
    </>
  );
}