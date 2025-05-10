import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getQuizAll } from "../../../../services/apiServices";

function TableQuizzes(props) {
  const {
    handleClickBtnUpdate,
    handleClickBtnDelete,
    handleClickBtnView,
    isCreateQuiz,
  } = props;
  const [dataQuizzes, setDataQuizzes] = useState([]);

  useEffect(() => {
    fetAPIQuizzes();
  }, [isCreateQuiz]);
  const fetAPIQuizzes = async () => {
    let res = await getQuizAll();
    if (res && res.DT) {
      setDataQuizzes(res.DT);
    }
  };
  // console.log(dataQuizzes);
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>difficulty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataQuizzes && dataQuizzes.length > 0 ? (
            dataQuizzes.map((item, index) => {
              return (
                <tr key={item.id || index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleClickBtnView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>không có sản phẩm nào</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
export default TableQuizzes;
