import { useEffect, useState } from "react";
import Select from "react-select";
import {
  AssignQuizToUser,
  getAllUser,
  getQuizAll,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";

function AssignQuiz(props) {
  //
  const [selectedOption, setSelectedOption] = useState(null);
  const [DataSelectedOption, setDataSelectedOption] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [DataSelectedUsers, setDataSelectedUsers] = useState([]);

  useEffect(() => {
    fetchApiSelectQuizzes();
    fetchApiSelectUsers();
  }, []);

  const fetchApiSelectQuizzes = async () => {
    const res = await getQuizAll();

    const options =
      res &&
      res.DT &&
      res.DT.map((options) => {
        return {
          value: options.id,
          label: `${options.id} - ${options.name}`,
        };
      });
    setDataSelectedOption(options);
  };
  const fetchApiSelectUsers = async () => {
    const res = await getAllUser();

    const users =
      res &&
      res.DT &&
      res.DT.map((users) => {
        return {
          value: users.id,
          label: `${users.id} - ${users.username} - ${users.email}`,
        };
      });
    setDataSelectedUsers(users);
  };
  const HandleClickAssignQuizToUser = async () => {
    const res = await AssignQuizToUser(
      selectedOption.value,
      selectedUsers.value
    );

    if (res && res.EC === 0) {
      toast.success(res.EM);
      setSelectedOption(null);
      setSelectedUsers(null);
    } else {
      toast.error(res.EM);
    }
  };
  // console.log(DataSelectedOption, DataSelectedUsers);

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className=" col-6 form-group">
            <label className="mb-1">Select Quiz:</label>
            <Select
              onChange={setSelectedOption}
              options={DataSelectedOption}
              value={selectedOption}
              isClearable={true}
              defaultValue={null}
            />
          </div>
          <div className=" col-6 form-group">
            <label className="mb-1">Select Users:</label>
            <Select
              onChange={setSelectedUsers}
              options={DataSelectedUsers}
              value={selectedUsers}
              isClearable={true}
              defaultValue={null}
            />
          </div>
        </div>
        <button
          className="btn btn-warning mt-4"
          onClick={() => HandleClickAssignQuizToUser()}
        >
          Assign
        </button>
      </div>
    </>
  );
}
export default AssignQuiz;
