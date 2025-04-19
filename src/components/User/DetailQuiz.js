import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuestion } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetchdataQuiz();
  }, [quizId]);

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
      console.log(data);
    }
  };
  return (
    <>
      <div className="container">
        <div className="detail-title text-center mt-5"></div>
        <div className="detail-Quiz ">
          <div className="detail-Quiz_question">
            <div className="text-center">
              <h2> Quiz 1: {location.state.titleQuiz}</h2>
            </div>
            <img className="image_Quiz" src="" alt="image-question" />
            <div className="detail-Quiz_bodyQuestion">
              <h4 className="question">Question 1 : how are you doing?</h4>
              <div className="answerss">
                <div className="a-child">A. đáp án 1</div>
                <div className="a-child">B. đáp án 2</div>
                <div className="a-child">C. đáp án 3</div>
              </div>
            </div>
            <div className="detail-Quiz_pageNext text-center">
              <button className="btn btn-secondary me-3 ">Prev</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
          <div className="detail-Quiz_countDown">CountDown</div>
        </div>
      </div>
    </>
  );
}
export default DetaiQuiz;
