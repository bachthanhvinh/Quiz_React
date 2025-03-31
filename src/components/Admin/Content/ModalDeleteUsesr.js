import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalDeleteUser(props) {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => {
    setShow(false);
  };
  const handleSubmitDeleteUser = (data) => {
    alert("click me");
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this user? <br />
            Email : {""}
            <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmitDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;
