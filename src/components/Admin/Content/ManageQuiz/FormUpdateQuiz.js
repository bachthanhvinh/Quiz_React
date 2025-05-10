import { Col, Form, Row } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";

function FormUpdateQuiz(props) {
  const {
    name,
    setName,
    description,
    setDescription,
    difficulty,
    setDifficulty,
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
  };

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Difficulty</Form.Label>
            <Form.Select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
            >
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
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
    </>
  );
}
export default FormUpdateQuiz;
