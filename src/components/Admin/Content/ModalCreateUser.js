import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GridComplexExample from "./FormAddNewUser";
import axios from "axios";

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

  const handSubmitCreactUser = async () => {
    // let data = {
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   userImage: image,
    // };
    // console.log(data);
    // const FormData = require("form-data");

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);

    let res = await axios.post(
      "http://localhost:8081/api/v1/participant",
      data
    );
    // const result = await res.json();
    console.log(">>>check res: ", res);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

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
