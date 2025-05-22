import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";

function ModalQuizUser(props) {
  const { show, setShow, dataAnswers } = props;

  const handleClose = () => {
    setShow(false);
  };
  // console.log(dataAnswers);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Answer section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Total Question: <b>{dataAnswers.countTotal}</b>
          </div>
          <div>
            Total Correct Answer: <b>{dataAnswers.countCorrect}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalQuizUser;
