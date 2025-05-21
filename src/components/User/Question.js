import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
function Question(prop) {
  const { data, index, handleClickCheck } = prop;
  const [isPreview, setIsPreview] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleClickRadio = (questionId, answerId) => {
    // console.log(questionId, answerId);
    handleClickCheck(questionId, answerId);
  };
  return (
    <>
      <div className="detail-Quiz_bodyQuestion">
        <div className="text-center my-3">
          {data && data.image ? (
            <>
              <img
                className="image_Quiz  mt-3"
                src={`data:image/jpg;base64,${data.image}`}
                alt="image-question"
                onClick={() => setIsPreview(true)}
              />

              {isPreview === true && (
                <Lightbox
                  image={`data:image/jpg;base64,${data.image}`}
                  title={`question-${data.image}`}
                  onClose={() => setIsPreview(false)}
                />
              )}
            </>
          ) : (
            <div className="image_nothing  mt-3">{`(Không có ảnh)`}</div>
          )}
          <h4 className="question mt-2">
            Question {index + 1} : {data && data.description} ?
          </h4>
        </div>
        <div className="answerss">
          {data &&
            data.answers &&
            data.answers.map((a, index) => {
              // console.log(a.isSelected);
              return (
                <div key={`answers-${index}`} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    // value=""
                    checked={a.isSelected && a.isSelected}
                    id={`flexCheckDefault-${index}`}
                    onChange={() => handleClickRadio(data.questionId, a.id)}
                  />

                  <label
                    className="form-check-label"
                    htmlFor={`flexCheckDefault-${index}`}
                  >
                    <div className="a-child">{a.description}</div>
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
