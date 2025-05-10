import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUsers";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUsesr";
import TableUserPage from "./TableUserPage";
import { pagenationUser } from "../../../services/apiServices";

const ManageUser = (props) => {
  const [showModalCreactUser, setShowModalCreactUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const onReload = () => {
    setIsUserAdded((prev) => !prev);
  };
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    // console.log(user);
    setDataUpdate(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  };
  const resetDataUpdate = (user) => {
    setDataUpdate({});
  };
  const resetDataView = () => {
    setDataView({});
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  console.log(currentPage);
  return (
    <>
      <div className="manageUser-container p-2">
        <div className="manageUser-container__title"> Manage User</div>
        <div className="manageUser-container__content">
          <div className="btn-add-new">
            <button
              className=" button-add"
              onClick={() => setShowModalCreactUser(true)}
            >
              <FcPlus /> Add new Users
            </button>
          </div>
          <div className="table-user-container">
            {/* <TableUser
              isUserAdded={isUserAdded}
              handleClickBtnUpdate={handleClickBtnUpdate}
              // handleClickBtnView={handleClickBtnView}
              handleClickBtnDelete={handleClickBtnDelete}
            /> */}
            <TableUserPage
              isUserAdded={isUserAdded}
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnView={handleClickBtnView}
              handleClickBtnDelete={handleClickBtnDelete}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <ModalCreateUser
            show={showModalCreactUser}
            setShow={setShowModalCreactUser}
            onReload={onReload}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <ModalUpdateUser
            show={showModalUpdateUser}
            setShow={setShowModalUpdateUser}
            dataUpdate={dataUpdate}
            onReload={onReload}
            resetDataUpdate={resetDataUpdate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <ModalViewUser
            show={showModalViewUser}
            setShow={setShowModalViewUser}
            dataView={dataView}
            // onReload={onReload}
            resetDataView={resetDataView}
          />
          <ModalDeleteUser
            show={showModalDeleteUser}
            setShow={setShowModalDeleteUser}
            dataDelete={dataDelete}
            onReload={onReload}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
