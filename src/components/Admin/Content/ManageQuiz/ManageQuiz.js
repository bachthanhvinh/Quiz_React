import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import ModalCreateQuiz from "./ModalCreateQuiz";
import "./ManageQuiz.scss";
import TableQuizzes from "./TableQuizzes";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
import ModalViewQuiz from "./ModalViewQuiz";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import { Accordion } from "react-bootstrap";
import QuizQA from "./QuizQA";
import AssignQuiz from "./AssignQuiz";
function ManageQuiz(props) {
  const [showModalCreactQuiz, setShowModalCreactQuiz] = useState(false);
  const [isCreateQuiz, setIscreateQuiz] = useState(false);
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [showModalViewQuiz, setShowModalViewQuiz] = useState(false);

  const [dataModal, setDataModal] = useState({});
  const onReload = () => {
    setIscreateQuiz((prev) => !prev);
  };

  const handleClickBtnDelete = (quiz) => {
    setShowModalDeleteQuiz(true);
    setDataModal(quiz);
  };
  const handleClickBtnUpdate = (quiz) => {
    setShowModalUpdateQuiz(true);

    // console.log(quiz);
    setDataModal(quiz);
  };
  const handleClickBtnView = (quiz) => {
    setShowModalViewQuiz(true);
    setDataModal(quiz);
  };

  const resetDataModal = () => {
    setDataModal({});
  };
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quiz</Accordion.Header>
          <Accordion.Body>
            <div className="manageQuiz-container p-2">
              {/* <div className="manageQuiz-container__title"> Manage Quiz</div> */}
              <div className="manageQuiz-container__content">
                <div className="btn-add-new-quiz">
                  <button
                    className=" button-add"
                    onClick={() => setShowModalCreactQuiz(true)}
                  >
                    <FcPlus /> Add new Quizs
                  </button>
                </div>
                <div className="table-Quiz-container">
                  <TableQuizzes
                    isCreateQuiz={isCreateQuiz}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnView={handleClickBtnView}
                    handleClickBtnDelete={handleClickBtnDelete}
                    // setCurrentPage={setCurrentPage}
                    // currentPage={currentPage}
                  />
                </div>
                <ModalCreateQuiz
                  show={showModalCreactQuiz}
                  setShow={setShowModalCreactQuiz}
                  onReload={onReload}
                  // setCurrentPage={setCurrentPage}
                  // currentPage={currentPage}
                />
                <ModalUpdateQuiz
                  show={showModalUpdateQuiz}
                  setShow={setShowModalUpdateQuiz}
                  dataModal={dataModal}
                  onReload={onReload}
                  resetDataModal={resetDataModal}
                  // setCurrentPage={setCurrentPage}
                  // currentPage={currentPage}
                />
                <ModalViewQuiz
                  show={showModalViewQuiz}
                  setShow={setShowModalViewQuiz}
                  dataModal={dataModal}
                  // onReload={onReload}
                  resetDataModal={resetDataModal}
                />
                <ModalDeleteQuiz
                  show={showModalDeleteQuiz}
                  setShow={setShowModalDeleteQuiz}
                  dataDelete={dataModal}
                  onReload={onReload}
                  // setCurrentPage={setCurrentPage}
                  // currentPage={currentPage}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Update Q/A Quizzes</Accordion.Header>
          <Accordion.Body>
            <QuizQA />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Assign Quizzes</Accordion.Header>
          <Accordion.Body>
            <AssignQuiz />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default ManageQuiz;
