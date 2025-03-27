import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <>
      <div className="manageUser-container">
        <div className="manageUser-container__title"> Manage User</div>
        <div className="manageUser-container__content">
          <div>
            <button>Add new Users</button>
          </div>
          <div>Table Users</div>
          <ModalCreateUser />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
