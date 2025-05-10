import { Button, Modal } from "react-bootstrap";
import { deleteQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";

function ModalDeleteQuiz(props) {
  const { show, setShow, dataDelete, onReload } = props;

  const handleClose = () => {
    setShow(false);
  };
  const handleClickDelete = async () => {
    let data = await deleteQuiz(dataDelete.id);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      onReload();
      handleClose();
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this quiz?
          <br />
          Name:<b> {dataDelete.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleClickDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteQuiz;
