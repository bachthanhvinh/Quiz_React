import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GridComplexExample from "./FormAddNewUser";
import { Bounce, toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";
function ModalCreateUser(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const { show, setShow } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };
  // const handleShow = () => setShow(true);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handSubmitCreactUser = async () => {
    //validate
    // const isValidateEmail = validateEmail(email);
    // if (!isValidateEmail) {
    //   toast.error("Invalid Email !");

    //   return;
    // }
    if (!password) {
      toast.error("Invalid password");
      return;
    }

    let data = await postCreateNewUser(email, password, username, role, image);
    console.log("component res: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GridComplexExample
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            role={role}
            setRole={setRole}
            image={image}
            setImage={setImage}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSubmitCreactUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser;
