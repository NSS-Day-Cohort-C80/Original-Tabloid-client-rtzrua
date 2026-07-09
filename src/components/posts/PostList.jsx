import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../managers/postManager";

export default function PostList({ loggedInUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsFromApi) => {
      setPosts(postsFromApi);
    });
  }, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.category}</td>
              <td>
                {loggedInUser?.id === post.userProfileId && (
                  <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}