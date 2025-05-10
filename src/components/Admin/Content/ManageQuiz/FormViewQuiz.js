import { Col, Form, Row } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";

function FormViewQuiz(props) {
  const {
    name,
    setName,
    description,
    setDescription,
    difficulty,
    setDifficulty,
    img,
    setImage,
    previewImage,
    setPreviewImage,
  } = props;
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
              disabled
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description..."
              value={description}
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Difficulty</Form.Label>
            <Form.Select value={difficulty} disabled>
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formImages">
            {/* <Form.Label className="label-upload">
              <FcPlus /> Upload File Image
            </Form.Label> */}
            <Form.Control
              type="file"
              hidden
              disabled
              // value={image}
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
export default FormViewQuiz;
