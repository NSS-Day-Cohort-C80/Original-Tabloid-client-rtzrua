import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProfile } from "../../managers/userProfileManager";
import { getPostsByUser } from "../../managers/postManager";

export default function UserProfileDetails() {
  const [userProfile, setUserProfile] = useState();
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProfile(id).then(setUserProfile);
    getPostsByUser(id).then(setPosts);
  }, [id]);

  if (!userProfile) {
    return null;
  }
  return (
    <>
      <img src={userProfile.imageLocation} alt={userProfile.firstName} />
      <h3>{userProfile.fullName}</h3>
      <p>Username: {userProfile.userName}</p>

      <h4>Posts by {userProfile.fullName}</h4>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link> —{" "}
              {post.category}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}