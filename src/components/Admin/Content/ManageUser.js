import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <>
      <div className="manageUser-container">
        <div className="manageUser-container__title"> Manage User</div>
        <div className="manageUser-container__content">
          <div>
            <button>Add new Users</button>
          </div>
          <div>
            <ModalCreateUser />
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageUser;
