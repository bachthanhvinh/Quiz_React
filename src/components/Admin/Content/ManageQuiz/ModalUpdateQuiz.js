import _ from "lodash";
import { useEffect, useState } from "react";
import FormUpdateQuiz from "./FormUpdateQuiz";
import { Button, Modal } from "react-bootstrap";
import { updateQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";

function ModalUpdateQuiz(props) {
  const { show, setShow, onReload, resetDataModal, dataModal } = props;

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
      setImage("");
      if (dataModal.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataModal.image}`);
      }
    }
  }, [dataModal]);

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setDifficulty("EASY");
    setImage("");
    setPreviewImage("");
    resetDataModal();
  };

  const handSubmitUpdateQuiz = async () => {
    let data = await updateQuiz(
      dataModal.id,
      description,
      name,
      difficulty,
      image
    );
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      onReload();
    } else {
      toast.error(data.EM);
    }
  };

  //   console.log(dataModal);
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
          <Modal.Title>Update a Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdateQuiz
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
          <Button variant="primary" onClick={() => handSubmitUpdateQuiz()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalUpdateQuiz;
