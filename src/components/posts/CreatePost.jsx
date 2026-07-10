import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createPost } from "../../managers/postManager";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      category,
      imageLocation: imageLocation || null,
      publicationDate: publicationDate || null,
    };

    createPost(newPost).then((res) => {
      navigate(`/posts/${res.id}`);
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h2>Create a Post</h2>
      <Form>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Content</Label>
          <Input
            type="textarea"
            placeholder="Write your post..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input
            type="text"
            placeholder="Post category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Header Image URL (Optional)</Label>
          <Input
            type="text"
            placeholder="Add image url"
            value={imageLocation}
            onChange={(e) => {
              setImageLocation(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Publication Date (Optional)</Label>
          <Input
            type="date"
            value={publicationDate}
            onChange={(e) => {
              setPublicationDate(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </Form>
    </div>
  );
};
