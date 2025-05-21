import "../DetailQuiz.scss";
const RightContent = (props) => {
  const { dataQ } = props;
  //   console.log(dataQ);
  return (
    <>
      <div className="main-timer">00:10:10</div>
      <div className="main-question">
        {dataQ &&
          dataQ.length &&
          dataQ.map((qAnswer) => {
            console.log(qAnswer);
            return (
              <>
                <div className="question">{qAnswer.questionId}</div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
