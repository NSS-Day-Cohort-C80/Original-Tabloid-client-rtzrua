import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getMyPosts } from "../../managers/postManager";

export default function MyPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getMyPosts().then(setPosts);
  }, []);

  return (
    <div className="container">
      <h2>My Posts</h2>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.authorName}</td>
              <td>{post.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}