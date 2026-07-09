import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export const CreatePost = () => {
  const [post, setPost] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

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
          <Label>Header image (Optional)</Label>
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
          <Label>Publication date (Optional)</Label>
          <Input
            type="text"
            placeholder="MM/DD/YYYY"
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
