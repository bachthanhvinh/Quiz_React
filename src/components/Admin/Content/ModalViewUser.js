import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Bounce, toast } from "react-toastify";
import { postCreateNewUser, updateUser } from "../../../services/apiServices";
import FormUpdateUser from "./FormUpdateUser";
import _ from "lodash";
import FormViewUser from "./FormViewUser";
function ModalViewUser(props) {
  const { show, setShow, onReload, dataView, resetDataView } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log("render");
    if (!_.isEmpty(dataView)) {
      //update state
      setEmail(dataView.email);
      setUsername(dataView.username);
      setRole(dataView.role);
      setImage("");
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
      }
    }
  }, [dataView]);
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
    resetDataView();
  };

  // const handleShow = () => setShow(true);

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };
  //   const handSubmitUpdateUser = async () => {
  //     // validate;
  //     // const isValidateEmail = validateEmail(email);
  //     // if (!isValidateEmail) {
  //     //   toast.error("Invalid Email !");

  //     //   return;
  //     // }

  //     let data = await updateUser(dataView.id, username, role, image);
  //     // console.log("component res: ", data);

  //     if (data && data.EC === 0) {
  //       toast.success(data.EM);
  //       handleClose();
  //       onReload();
  //     }
  //     if (data && data.EC !== 0) {
  //       toast.error(data.EM);
  //     }
  //   };
  //   console.log("check render: dataUpate", dataView);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user "
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormViewUser
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
            // dataView={dataView}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => handSubmitUpdateUser()}>
            Save
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalViewUser;
