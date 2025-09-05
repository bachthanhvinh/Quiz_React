import { Table } from "react-bootstrap";
import "./History.scss";
import { useEffect, useState } from "react";
import { getHistoryUser } from "../../../services/apiServices";
import dayjs from "dayjs";

const History = () => {
  const [HistoryUser, setHistoryUser] = useState([]);
  useEffect(() => {
    fetApiHistoryUser();
  }, []);
  const fetApiHistoryUser = async () => {
    const data = await getHistoryUser();
    let resultData = [];
    data?.DT?.data.map((item) => {
      resultData.push({
        id: item?.id,
        total_correct: item?.total_correct,
        total_questions: item?.total_questions,

        createdAt: dayjs(item?.createdAt).format("YYYY-MM-DD HH:mm:ss A"),

        name: item?.quizHistory?.name,
      });
    });
    // if (resultData && resultData.length > 7) {
    //   let newData = resultData.slice(resultData.length - 7, resultData.length);
    //   setHistoryUser(newData);
    //   // console.log(resultData);
    // }
    if (resultData && resultData.length > 5 ) {
      let newData = resultData.slice(resultData.length - 5, resultData.length );
      setHistoryUser(newData);
      // console.log(resultData);
    }
  };

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
            {HistoryUser.map((item) => {
              return (
                <tr key={`${item.id}-historyUser`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.total_correct}</td>
                  <td>{item.total_questions}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default History;
