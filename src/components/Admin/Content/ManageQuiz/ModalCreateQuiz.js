import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Bounce, toast } from "react-toastify";
import FormCreateQuiz from "./FormCreateQuiz";
import { postCreateQuiz } from "../../../../services/apiServices";
function ModalCreateQuiz(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quizType, setQuizType] = useState("EASY");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const { show, setShow, onReload, setCurrentPage } = props;

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setQuizType("EASY");
    setImage("");
    setPreviewImage("");
  };

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };
  const handSubmitCreactQuiz = async () => {
    // validate;
    // const isValidateEmail = validateEmail(name);
    // if (!isValidateEmail) {
    //   toast.error("Invalid Email !");
    //   return;
    // }
    // if (!password) {
    //   toast.error("Invalid password");
    //   return;
    // }
    let res = await postCreateQuiz(name, description, quizType, image);

    console.log(res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      onReload();
      handleClose();
    } else {
      toast.error(res.EM);
    }
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
