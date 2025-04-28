import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";
import "./ManageQuiz.scss";
function FormCreateQuiz(props) {
  const {
    name,
    setName,
    description,
    setDescription,
    quizType,
    setQuizType,
    image,
    setImage,
    previewImage,
    setPreviewImage,
  } = props;
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
    // console.log("upload File", event.target.files[0]);
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={quizType}
            onChange={(event) => setQuizType(event.target.value)}
          >
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="DIFFICULT">HARD</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formImages">
          <Form.Label className="label-upload">
            <FcPlus /> Upload File Image
          </Form.Label>
          <Form.Control
            type="file"
            hidden
            // value={image}
            onChange={(event) => handleUploadImage(event)}
          />
        </Form.Group>
        <div className="col-md-12 img-preview">
          {previewImage ? (
            <img src={previewImage} />
          ) : (
            <span>Preview Image</span>
          )}
        </div>
      </Row>
    </Form>
  );
}

export default FormCreateQuiz;
