import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../managers/postManager";
import { getCommentsByPost } from "../../managers/commentManager";

export default function CommentsList() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostById(id).then(setPost);
    getCommentsByPost(id).then(setComments);
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <Link to={`/posts/${id}`}>Back to Post</Link>

      <h4>Comments</h4>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => {
          const formattedDate = new Date(
            comment.creationDate,
          ).toLocaleDateString("en-US");

          return (
            <div
              key={comment.id}
              style={{
                borderBottom: "1px solid #ddd",
                marginBottom: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <h5>{comment.subject}</h5>
              <p>{comment.content}</p>
              <p>
                By: {comment.authorDisplayName} | {formattedDate}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}