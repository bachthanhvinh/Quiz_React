import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.scss";
import { useEffect, useState } from "react";
import { getOverView } from "../../../services/apiServices";
const DashBoard = (props) => {
  const [dataOverView, setDataOverView] = useState([]);
  const [dataCharts, setDataCharts] = useState([]);

  useEffect(() => {
    getDataOverView();
  }, []);

  const getDataOverView = async () => {
    const res = await getOverView();
    if (res.DT && res.EC === 0) {
      setDataOverView(res);
      let quiz = res?.DT?.others?.countQuiz ?? 0;
      let question = res?.DT?.others?.countQuestions ?? 0;
      let answer = res?.DT?.others?.countAnswers ?? 0;
      let user = res?.DT?.users?.countUsers ?? 0;

      const data = [
        {
          name: "Users",
          Total: user,
        },
        {
          name: "Quizzes",
          Total: quiz,
        },
        {
          name: "Questions",
          Total: question,
        },
        {
          name: "Answers",
          Total: answer,
        },
      ];
      setDataCharts(data);
    }
  };

  console.log(dataOverView);
  return (
    <>
      <div className="container-dashboard">
        {/* <h3 className="container-dashboard__title">Dash board</h3> */}
        <div className="d-content">
          <div className="d-content__left">
            <div className="left-item1">
              <span className="left-item__1">Total Users</span>
              <span className="left-item__2">
                {dataOverView && dataOverView.DT && dataOverView.DT.users ? (
                  <>{dataOverView.DT.users.countUsers}</>
                ) : (
                  <>0</>
                )}{" "}
              </span>
            </div>
            <div className="left-item2">
              <span className="left-item__1">Total Quizzes</span>
              <span className="left-item__2">
                {dataOverView && dataOverView.DT && dataOverView.DT.others ? (
                  <>{dataOverView.DT.others.countQuiz}</>
                ) : (
                  <>0</>
                )}{" "}
              </span>
            </div>
            <div className="left-item3">
              <span className="left-item__1">Total Questions</span>
              <span className="left-item__2">
                {dataOverView && dataOverView.DT && dataOverView.DT.others ? (
                  <>{dataOverView.DT.others.countQuestions}</>
                ) : (
                  <>0</>
                )}{" "}
              </span>
            </div>
            <div className="left-item4">
              <span className="left-item__1">Total Answers</span>
              <span className="left-item__2">
                {dataOverView && dataOverView.DT && dataOverView.DT.others ? (
                  <>{dataOverView.DT.others.countAnswers}</>
                ) : (
                  <>0</>
                )}{" "}
              </span>
            </div>
          </div>
          <div className="d-content__right">
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={dataCharts}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Total" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
