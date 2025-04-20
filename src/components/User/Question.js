import _ from "lodash";

function Question(prop) {
  const { data, index } = prop;
  if (_.isEmpty(data)) {
    return <></>;
  }
  // console.log(data);
  return (
    <>
      <div className="detail-Quiz_bodyQuestion">
        <div className="text-center my-3">
          {data && data.image && (
            <img
              className="image_Quiz"
              src={`data:image/jpg;base64,${data.image}`}
              alt="image-question"
            />
          )}
        </div>
        <h4 className="question">
          Question {index + 1} : {data && data.description} ?
        </h4>
        <div className="answerss">
          {data &&
            data.answers &&
            data.answers.map((a, index) => {
              return (
                <div key={`answers-${index}`} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <div className="a-child">{a}</div>
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Question;
