import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUsers";

const ManageUser = (props) => {
  const [showModalCreactUser, setShowModalCreactUser] = useState(false);
  const [isUserAdded, setIsUserAdded] = useState(false);

  const handleUserAdded = () => {
    setIsUserAdded((prev) => !prev);
  };
  return (
    <>
      <div className="manageUser-container">
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
            <TableUser isUserAdded={isUserAdded} />
          </div>
          <ModalCreateUser
            show={showModalCreactUser}
            setShow={setShowModalCreactUser}
            onUserAdded={handleUserAdded}
          />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
