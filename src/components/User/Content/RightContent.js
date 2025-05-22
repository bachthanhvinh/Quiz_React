import "../DetailQuiz.scss";
import CountDown from "./CountDown";
const RightContent = (props) => {
  const { dataQ, handleFinish } = props;
  //   console.log(dataQ);
  const timeOut = () => {
    handleFinish();
  };
  return (
    <>
      <div className="main-timer">
        <CountDown timeOut={timeOut} />
      </div>
      <div className="main-question">
        {dataQ &&
          dataQ.length > 0 &&
          dataQ.map((qAnswer, index) => {
            // console.log(qAnswer.questionId);
            return (
              <div
                key={`question-answer-${qAnswer.questionId}`}
                className="question"
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
