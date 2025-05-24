import { useRef } from "react";
import "../DetailQuiz.scss";
import CountDown from "./CountDown";
const RightContent = (props) => {
  const { dataQ, handleFinish, setIndex } = props;
  const refDiv = useRef([]);
  const timeOut = () => {
    handleFinish();
  };
  const getClassQuestions = (question) => {
    // console.log(question);

    return question?.answers?.some((item) => item.isSelected === true)
      ? "question  SelectedAnswer"
      : "question";
  };
  const handleClickQuestion = (question, index) => {
    setIndex(index);

    if (refDiv?.current) {
      refDiv?.current.forEach((item) => {
        if (item?.className === "question clicked") {
          item.className = "question";
        }
      });
    }
    if (question?.answers) {
      if (question?.answers?.some((item) => item.isSelected === true)) {
        return;
      }
    }
    console.log(refDiv.current);
    refDiv.current[index].className = "question clicked";
  };
  return (
    <>
      <div className="main-timer">
        <CountDown timeOut={timeOut} />
      </div>
      <div className="main-question">
        {dataQ?.length > 0 &&
          dataQ.map((qAnswer, index) => {
            return (
              <div
                key={`question-abc-${qAnswer.questionId}`}
                className={getClassQuestions(qAnswer)}
                onClick={() => handleClickQuestion(qAnswer, index)}
                ref={(element) => (refDiv.current[index] = element)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
