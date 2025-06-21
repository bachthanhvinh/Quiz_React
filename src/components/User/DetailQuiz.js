import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDataQuestion, postFinishResult } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalQuizUser from "./ModalQuizUser";
import RightContent from "./Content/RightContent";
import { Breadcrumb } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Language from "../Header/Language";
function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  const location = useLocation();

  const [dataQ, setDataQ] = useState([]);
  const [index, setIndex] = useState(0);
  const [checkShowModal, setCheckShowModal] = useState(false);
  const [dataAnswers, setDataAnswers] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [checkFinish, setCheckFinish] = useState(false);
  const [checkTrueAndFalseAnswer, setCheckTrueAndFalseAnswer] = useState(false);

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
    /////// post finish Result //////////////
    let res = await postFinishResult(payLoad);
    // console.log(" >>> Check", res);
    if (res && res.EC === 0) {
      setCheckFinish(true);
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
    //////////// UpdateAnswer/////////
    // const dataQClone = _.cloneDeep(dataQ);
    // const answerF = res.DT.quizData;
    // for (let qAnswer of answerF) {
    //   for (let i = 0; i < dataQClone.length; i++) {
    //     if (+qAnswer.questionId === +dataQClone[i].questionId) {
    //       const newAnswer = [];
    //       // console.log("i", dataQClone[i].answers.length);
    //       for (let j = 0; j < dataQClone[i].answers.length; j++) {
    //         let checkAnswer = qAnswer.systemAnswers.find(
    //           (item) => +item.id === +dataQClone[i].answers[j].id
    //         );
    //         if (checkAnswer) {
    //           dataQClone[i].answers[j].isCorrect = true;
    //         }
    //         newAnswer.push(dataQClone[i].answers[j]);
    //       }
    //       dataQClone[i].answers = newAnswer;
    //     }
    //   }
    // }
    // setDataQ(dataQClone);
    const dataQClone = _.cloneDeep(dataQ);
    const answerF = res.DT.quizData;

    const answerMap = new Map();
    for (const q of answerF) {
      const ids = new Set(q.systemAnswers.map((item) => +item.id));
      answerMap.set(+q.questionId, ids);
    }

    const updateData = dataQClone.map((question) => {
      const systemAnswerIds = answerMap.get(+question.questionId);
      if (!systemAnswerIds) return question;
      const updatedAnswers = question.answers.map((answer) => ({
        ...answer,
        isCorrect: systemAnswerIds.has(+answer.id),
      }));
      return {
        ...question,
        answers: updatedAnswers,
      };
    });
    setDataQ(updateData);
  };

  const fetchdataQuiz = async () => {
    const res = await getDataQuestion(quizId);
    let raw = res.DT;

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
              answers.push({
                ...item.answers,
                isSelected: false,
                isCorrect: false,
              });
            }
          });

          answers = _.orderBy(answers, ["id"], ["asc"]);
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
  return (
    <>
      <div className="container">
        <div className="c-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate("/")}>
              {t("breadcrumb.home")}
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate("/users")}>
              {t("breadcrumb.users")}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{t("breadcrumb.quiz")}</Breadcrumb.Item>
          </Breadcrumb>
          <Language />
        </div>

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
              isShowTFAnswer={checkTrueAndFalseAnswer}
            />
            <div className="detail-Quiz_pageNext text-center">
              <button
                className="btn btn-secondary  "
                onClick={() => handlePrev()}
                disabled={index - 1 < 0 ? true : false}
              >
                Prev
              </button>
              <button
                className="btn btn-primary mx-3"
                onClick={() => handleNext()}
                disabled={dataQ.length > index + 1 ? false : true}
              >
                Next
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleFinish()}
                disabled={checkFinish}
              >
                Finish
              </button>
            </div>
          </div>
          <div className="detail-Quiz_countDown">
            <RightContent
              dataQ={dataQ}
              handleFinish={handleFinish}
              setIndex={setIndex}
            />
          </div>
        </div>
      </div>
      <ModalQuizUser
        show={checkShowModal}
        setShow={setCheckShowModal}
        dataAnswers={dataAnswers}
        setCheckModelAnswer={setCheckTrueAndFalseAnswer}
      />
    </>
  );
}
export default DetaiQuiz;
