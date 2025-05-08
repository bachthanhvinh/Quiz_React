import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getQuizUser } from "../../../../services/apiServices";

function TableQuizzes(props) {
  const { isCreateQuiz } = props;
  const [dataQuizzes, setDataQuizzes] = useState([]);

  useEffect(() => {
    fetAPIQuizzes();
  }, [isCreateQuiz]);
  const fetAPIQuizzes = async () => {
    let res = await getQuizUser();
    if (res && res.DT) {
      setDataQuizzes(res.DT);
    }
  };
  console.log(dataQuizzes);
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
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
                  <td>@mdo</td>
                </tr>
              );
            })
          ) : (
            <tr> không có sản phẩm nào</tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
export default TableQuizzes;
