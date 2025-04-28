import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Bounce, toast } from "react-toastify";
// import { postCreateNewQuiz } from "../../../services/apiServices";
import FormCreateQuiz from "./FormCreateQuiz";
function ModalCreateQuiz(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quizType, setQuizType] = useState("EASY");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const { show, setShow, onReload, setCurrentPage } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setQuizType("EASY");
    setImage("");
    setPreviewImage("");
  };
  // const handleShow = () => setShow(true);

  //   const validateEmail = (email) => {
  //     return String(email)
  //       .toLowerCase()
  //       .match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       );
  //   };
  const handSubmitCreactQuiz = async () => {
    //   // validate;
    //   const isValidateEmail = validateEmail(email);
    //   if (!isValidateEmail) {
    //     toast.error("Invalid Email !");
    //     return;
    //   }
    //   if (!password) {
    //     toast.error("Invalid password");
    //     return;
    //   }
    //   let data = await postCreateNewQuiz(email, password, Quizname, role, image);
    //   // console.log("component res: ", data);
    //   if (data && data.EC === 0) {
    //     toast.success(data.EM);
    //     handleClose();
    //     onReload();
    //     setCurrentPage(1);
    //   }
    //   if (data && data.EC !== 0) {
    //     toast.error(data.EM);
    //   }
    console.log(name, description, quizType);
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
          <Modal.Title>Add new Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCreateQuiz
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            quizType={quizType}
            setQuizType={setQuizType}
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
          <Button variant="primary" onClick={() => handSubmitCreactQuiz()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateQuiz;
