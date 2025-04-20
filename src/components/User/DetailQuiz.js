import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuestion } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  const location = useLocation();

  const [dataQ, setDataQ] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (dataQ && dataQ.length > index + 1) setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index - 1 < 0) return;

    setIndex(index - 1);
  };
  useEffect(() => {
    fetchdataQuiz();
  }, [quizId, index]);

  const fetchdataQuiz = async () => {
    const res = await getDataQuestion(quizId);
    let raw = res.DT;
    if (res && res.EC === 0) {
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answersUser = [];
          let description,
            image = null;
          value.map((item, index) => {
            if (index === 0) {
              description = item.description;
              image = item.image;
            }
            answersUser.push(item.answers.description);
          });
          return {
            questionId: +key,
            answers: answersUser,
            description,
            image,
          };
        })
        .value();
      setDataQ(data);
    }
  };
  // console.log(dataQ);
  return (
    <>
      <div className="container">
        <div className="detail-title text-center mt-5"></div>
        <div className="detail-Quiz ">
          <div className="detail-Quiz_question">
            <div className="text-center">
              <h2>
                Quiz {location.state.id}: {location.state.titleQuiz}
              </h2>
            </div>

            <Question
              data={dataQ && dataQ.length > 0 ? dataQ[index] : []}
              index={index}
            />
            <div className="detail-Quiz_pageNext text-center">
              <button
                className="btn btn-secondary me-3 "
                onClick={() => handlePrev()}
              >
                Prev
              </button>
              <button className="btn btn-primary" onClick={() => handleNext()}>
                Next
              </button>
            </div>
          </div>
          <div className="detail-Quiz_countDown">CountDown</div>
        </div>
      </div>
    </>
  );
}
export default DetaiQuiz;
