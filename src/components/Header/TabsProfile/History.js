import { Table } from "react-bootstrap";
import "./History.scss";
import { useEffect, useState } from "react";
import { getHistoryUser } from "../../../services/apiServices";
const History = () => {
  const [HistoryUser, setHistoryUser] = useState([]);
  useEffect(() => {
    fetApiHistoryUser();
  }, []);
  const fetApiHistoryUser = async () => {
    const data = await getHistoryUser();
    let resultData = [];
    data.DT.data.map((item) => {
      resultData.push({
        id: item.id,
        total_correct: item.total_correct,
        total_questions: item.total_questions,
        createdAt: item.createdAt,
        name: item.quizHistory.name,
      });
    });
    if (resultData.length > 7) {
      let newData = resultData.slice(resultData.length - 7, resultData.length);
      console.log(resultData);
    }
  };
  console.log(HistoryUser);
  return (
    <>
      <div className="container-history">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Quiz Name</th>
              <th>Total Question</th>
              <th>Total Correct</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default History;
