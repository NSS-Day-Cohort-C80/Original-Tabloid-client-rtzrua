import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, deletePost } from "../../managers/postManager";
import { addReaction, getReactionCounts } from "../../managers/reactionManager";

const REACTION_OPTIONS = ["👍", "😂", "😍", "😮", "😢"];

export default function PostDetails({ loggedInUser }) {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [reactionCounts, setReactionCounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then((postFromApi) => {
      setPost(postFromApi);
    });
    loadReactionCounts();
  }, [id]);

  const loadReactionCounts = () => {
    getReactionCounts(id).then((counts) => {
      setReactionCounts(counts);
    });
  };

  const handleReactionClick = (emoji) => {
    addReaction(emoji, parseInt(id)).then(() => {
      loadReactionCounts();
    });
  };

  const getCountForEmoji = (emoji) => {
    const match = reactionCounts.find((c) => c.emoji === emoji);
    return match ? match.count : 0;
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  const formattedDate = new Date(post.publicationDate).toLocaleDateString(
    "en-US",
  );

  const isAuthor = post.authorUserName === loggedInUser.userName;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id).then(() => navigate("/posts"));
    }
  };

  return (
    <div className="container">
      <h2>{post.title}</h2>
      {post.imageLocation && (
        <img
          src={post.imageLocation}
          alt={post.title}
          style={{ maxWidth: "100%" }}
        />
      )}
      <p>{post.content}</p>
      <p>Published: {formattedDate}</p>
      <p>By: {post.authorUserName}</p>
      {isAuthor && <button onClick={handleDelete}>Delete</button>}

      <div style={{ marginTop: "1rem" }}>
        {REACTION_OPTIONS.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleReactionClick(emoji)}
            style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
          >
            {emoji} {getCountForEmoji(emoji)}
          </button>
        ))}
        <div style={{ marginTop: "1rem" }}>
          <Link to={`/posts/${id}/comments`}>
            <button>View Comments</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
