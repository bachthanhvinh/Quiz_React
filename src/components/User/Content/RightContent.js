import { useRef, useState } from "react";
import "../DetailQuiz.scss";
import CountDown from "./CountDown";

const RightContent = ({ dataQ, handleFinish, setIndex, time, setTime }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  // const refDiv = useRef([]);

  const timeOut = () => {
    handleFinish();
  };

  const handleQuestionClick = (question, index) => {
    setIndex(index);
    const isAnswered = question?.answers?.some((item) => item.isSelected);
    if (!isAnswered) {
      setClickedIndex(index);
    } else {
      setClickedIndex(index);
    }
  };

  const getClassQuestion = (question, index) => {
    const isAnswered = question?.answers?.some((item) => item.isSelected);

    const isClicked = index === clickedIndex && !isAnswered;
    // if (isAnswered === true) {
    //   return "question isCheck";
    // }
    // if (isClicked === true) {
    //   return "question isClicked";
    // }
    // if (isClicked === false) {
    //   return "question ";
    // }
    return `question${isAnswered ? " isCheck" : ""}${
      isClicked ? " isClicked" : ""
    }`;
  };
  // const handleQuestionClick = (question, index) => {
  //   setIndex(index);
  //   console.log(refDiv.current);
  //   refDiv?.current?.forEach((item) => {
  //     if (item.className === "question isClicked") {
  //       item.className = "question";
  //     }
  //   });
  //   if (question?.answers?.some((item) => item.isSelected === true)) {
  //     return;
  //   }
  //   refDiv.current[index].className = "question isClicked";
  // };

  // const getClassQuestion = (question, index) => {
  //   const isAnswered = question?.answers?.some(
  //     (item) => item.isSelected === true
  //   );

  //   return `question${isAnswered ? " isCheck" : ""} `;
  // };
  return (
    <>
      <div className="main-timer">
        <CountDown timeOut={timeOut} time={time} setTime={setTime} />
      </div>
      <div className="main-question">
        {dataQ?.length > 0 &&
          dataQ.map((qAnswer, index) => (
            <div
              key={`question-answer-${qAnswer.questionId}`}
              className={getClassQuestion(qAnswer, index)}
              onClick={() => handleQuestionClick(qAnswer, index)}
              // ref={(element) => (refDiv.current[index] = element)}
            >
              {index + 1}
            </div>
          ))}
      </div>
    </>
  );
};

export default RightContent;
