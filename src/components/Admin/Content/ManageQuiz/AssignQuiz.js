import { useEffect, useState } from "react";
import Select from "react-select";
import { getAllUser, getQuizAll } from "../../../../services/apiServices";

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
          label: `${options.id} - ${options.description}`,
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
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className=" col-6 form-group">
            <label className="mb-1">Select Quiz:</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={DataSelectedOption}
            />
          </div>
          <div className=" col-6 form-group">
            <label className="mb-1">Select Users:</label>
            <Select
              defaultValue={selectedUsers}
              onChange={setSelectedUsers}
              options={DataSelectedUsers}
            />
          </div>
        </div>
        <button className="btn btn-warning mt-4">Assign</button>
      </div>
    </>
  );
}
export default AssignQuiz;
