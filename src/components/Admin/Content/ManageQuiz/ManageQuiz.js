import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import ModalCreateQuiz from "./ModalCreateQuiz";
import "./ManageQuiz.scss";
import TableQuizzes from "./TableQuizzes";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
import ModalViewQuiz from "./ModalViewQuiz";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import { Tab, Tabs } from "react-bootstrap";
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
      <Tabs
        defaultActiveKey="Manage Quiz"
        id="uncontrolled-tab-example"
        className="mb-3 "
        justify
      >
        <Tab eventKey="Manage Quiz" title="Manage Quiz">
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
        </Tab>
        <Tab eventKey="Update Q/A Quizzes" title="Update Q/A Quizzes">
          <QuizQA />
        </Tab>
        <Tab eventKey="Assign Quizzes" title="Assign Quizzes">
          <AssignQuiz />
        </Tab>
      </Tabs>
    </>
  );
}
export default ManageQuiz;
