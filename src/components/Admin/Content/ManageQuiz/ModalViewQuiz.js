import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormViewQuiz from "./FormViewQuiz";

function ModalViewQuiz(props) {
  const { show, setShow, resetDataModal, dataModal } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataModal)) {
      setName(dataModal.name);
      setDescription(dataModal.description);
      setDifficulty(dataModal.difficulty);
      if (dataModal.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataModal.image}`);
      }
    }
  });

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setDescription("EASY");
    setImage("");
    setPreviewImage("");
    resetDataModal();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-Quiz"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormViewQuiz
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            image={image}
            setImage={setImage}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            // dataUpdate={dataUpdate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalViewQuiz;
