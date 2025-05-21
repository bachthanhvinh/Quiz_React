import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuestion, postFinishResult } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalQuizUser from "./ModalQuizUser";
import RightContent from "./Content/RightContent";
function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  const location = useLocation();

  const [dataQ, setDataQ] = useState([]);
  const [index, setIndex] = useState(0);
  const [checkShowModal, setCheckShowModal] = useState(false);
  const [dataAnswers, setDataAnswers] = useState({});

  const handleNext = () => {
    if (dataQ && dataQ.length > index + 1) setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index - 1 < 0) return;

    setIndex(index - 1);
  };
  useEffect(() => {
    fetchdataQuiz();
  }, [quizId]);

  const handleClickCheck = (questionId, answerId) => {
    // console.log(questionId, answerId);
    let dataQClone = _.cloneDeep(dataQ);
    let question = dataQClone.find((item) => +item.questionId === +questionId);
    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answerId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }

    let index = dataQClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQClone[index] = question;
      setDataQ(dataQClone);
    }
  };
  const handleFinish = async () => {
    let payLoad = {
      quizId: +quizId,
      answers: [],
    };
    let answers = [];
    if (dataQ && dataQ.length > 0) {
      dataQ.forEach((question) => {
        let questionId = question.questionId;
        let userAnswerId = [];

        question.answers.forEach((a) => {
          if (a.isSelected === true) {
            userAnswerId.push(a.id);
          }
        });
        answers.push({
          questionId: +questionId,
          userAnswerId: userAnswerId,
        });
      });
    }
    payLoad.answers = answers;
    // console.log(payLoad);

    let res = await postFinishResult(payLoad);
    // console.log(" >>> Check", res);
    if (res && res.EC === 0) {
      setCheckShowModal(true);
      setDataAnswers({
        countCorrect: res.DT.countCorrect,
        countTotal: res.DT.countTotal,
        quizData: res.DT.quizData,
      });
    }
    if (res && res.EC !== 0) {
      console.log("error");
    }
  };

  const fetchdataQuiz = async () => {
    const res = await getDataQuestion(quizId);
    let raw = res.DT;
    // console.log(raw);

    if (res && res.EC === 0) {
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let description,
            image = null;

          value.map((item, index) => {
            if (index === 0) {
              description = item.description;
              image = item.image;
            }
            if (item.answers) {
              answers.push({ ...item.answers, isSelected: false });
            }
          });
          return {
            questionId: +key,
            answers,
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
              <hr />
            </div>

            <Question
              data={dataQ && dataQ.length > 0 ? dataQ[index] : []}
              index={index}
              handleClickCheck={handleClickCheck}
            />
            <div className="detail-Quiz_pageNext text-center">
              <button
                className="btn btn-secondary  "
                onClick={() => handlePrev()}
              >
                Prev
              </button>
              <button
                className="btn btn-primary mx-3"
                onClick={() => handleNext()}
              >
                Next
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleFinish()}
              >
                Finish
              </button>
            </div>
          </div>
          <div className="detail-Quiz_countDown">
            <RightContent dataQ={dataQ} />
          </div>
        </div>
      </div>
      <ModalQuizUser
        show={checkShowModal}
        setShow={setCheckShowModal}
        dataAnswers={dataAnswers}
      />
    </>
  );
}
export default DetaiQuiz;
