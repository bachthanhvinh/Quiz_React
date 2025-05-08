import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import ModalCreateQuiz from "./ModalCreateQuiz";
import "./ManageQuiz.scss";
import TableQuizzes from "./TableQuizzes";
function ManageQuiz(props) {
  const [showModalCreactQuiz, setShowModalCreactQuiz] = useState(false);
  const [isCreateQuiz, setIscreateQuiz] = useState(false);

  const onReload = () => {
    setIscreateQuiz((prev) => !prev);
  };
  return (
    <>
      <div className="manageQuiz-container p-2">
        <div className="manageQuiz-container__title"> Manage Quiz</div>
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
              // handleClickBtnUpdate={handleClickBtnUpdate}
              // handleClickBtnView={handleClickBtnView}
              // handleClickBtnDelete={handleClickBtnDelete}
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
          {/* <ModalUpdateQuiz
            show={showModalUpdateQuiz}
            setShow={setShowModalUpdateQuiz}
            dataUpdate={dataUpdate}
            onReload={onReload}
            resetDataUpdate={resetDataUpdate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <ModalViewQuiz
            show={showModalViewQuiz}
            setShow={setShowModalViewQuiz}
            dataView={dataUpdate}
            // onReload={onReload}
            resetDataView={resetDataUpdate}
          />
          <ModalDeleteQuiz
            show={showModalDeleteQuiz}
            setShow={setShowModalDeleteQuiz}
            dataDelete={dataDelete}
            onReload={onReload}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> */}
        </div>
      </div>
    </>
  );
}
export default ManageQuiz;
