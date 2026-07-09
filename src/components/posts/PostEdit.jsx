import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { getPostById, updatePost } from "../../managers/postManager";

export default function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  useEffect(() => {
    getPostById(id).then((post) => {
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
      setImageLocation(post.imageLocation || "");
      setPublicationDate(post.publicationDate?.split("T")[0] || "");
    });
  }, [id]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const updatedPost = {
    id: parseInt(id),
    title,
    content,
    category,
    imageLocation: imageLocation || null,
    publicationDate: publicationDate || null,
  };

  updatePost(updatedPost).then((res) => {
    if (res.status === 403) {
      alert("You do not have permission to edit this post.");
      navigate("/posts");
    } else {
      navigate(`/posts/${id}`);
    }
  });
};

  const handleCancel = () => {
    navigate("/posts");
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h3>Edit Post</h3>
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Content</Label>
        <Input
          type="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Category</Label>
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Header Image URL</Label>
        <Input
          type="text"
          value={imageLocation}
          onChange={(e) => setImageLocation(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Publication Date</Label>
        <Input
          type="date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Save
      </Button>{" "}
      <Button color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
}