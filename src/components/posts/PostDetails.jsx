import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../managers/postManager";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    getPostById(id).then((postFromApi) => {
      setPost(postFromApi);
    });
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  const formattedDate = new Date(post.publicationDate).toLocaleDateString(
    "en-US",
  );

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
    </div>
  );
}
