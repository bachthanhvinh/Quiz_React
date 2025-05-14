import { useState } from "react";
import Select from "react-select";
import {
  BsPatchMinus,
  BsPatchMinusFill,
  BsPatchPlus,
  BsPatchPlusFill,
  BsPlusSquareFill,
} from "react-icons/bs";
import { RiImageAddLine } from "react-icons/ri";
import "./ManageQuestions.scss";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

function Questions() {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "questions 1",
      imageFile: "",
      answers: [
        {
          id: uuidv4(),
          description: "answers 1",
          isCorrect: false,
        },
        {
          id: uuidv4(),
          description: "answers 2",
          isCorrect: false,
        },
      ],
    },
    {
      id: uuidv4(),
      description: "questions 2",
      imageFile: "",
      answers: [
        {
          id: uuidv4(),
          description: "answers 1",
          isCorrect: false,
        },
        {
          id: uuidv4(),
          description: "answers 2",
          isCorrect: false,
        },
      ],
    },
  ]);

  const handleClickQ = (type, questionId) => {
    if (type === "ADD") {
      let CloneQuestions = _.cloneDeep(questions);

      const newQuestions = {
        id: uuidv4(),
        description: `questions ${CloneQuestions.length + 1}`,
        imageFile: "",
        answers: [
          {
            id: uuidv4(),
            description: `answers 1`,
            isCorrect: false,
          },
        ],
      };

      setQuestions([...CloneQuestions, newQuestions]);
    }
    if (type === "REMOVE") {
      let CloneQuestions = _.cloneDeep(questions);
      CloneQuestions = CloneQuestions.filter(
        (item) => item.id !== questionId.id
      );
      setQuestions(CloneQuestions);
    }
  };
  const handleClickA = (type, questionId, answerId) => {
    if (type === "ADDANSWER") {
      let CloneQuestions = _.cloneDeep(questions);
      // let findQuestion = CloneQuestions.find(
      //   (item) => item?.id === questionId?.id
      // );

      // const index = findQuestion.findIndex((item) => item.id === questionId.id);
      // const newAnswers = {
      //   id: uuidv4(),
      //   description: `answers  ${findQuestion[index].answers.length + 1}`,
      //   isCorrect: false,
      // };

      // findQuestion[index].answers.push(newAnswers);

      // if (index > -1) {
      //   setQuestions(CloneQuestions);
      // }

      let UpdateQuestion = CloneQuestions.map((q) => {
        const newAnswers = {
          id: uuidv4(),
          description: `answers ${q.answers.length + 1} `,
          isCorrect: false,
        };
        if (q.id === questionId.id) {
          return {
            ...q,
            answers: [...q.answers, newAnswers],
          };
        }
        return q;
      });
      setQuestions(UpdateQuestion);
      // console.log(UpdateQuestion);
    }
    if (type === "REMOVEANSWER") {
      let CloneQuestions = _.cloneDeep(questions);

      const index = CloneQuestions.findIndex((q) => q.id === questionId.id);

      if (index !== -1) {
        CloneQuestions[index].answers = CloneQuestions[index].answers.filter(
          (a) => a.id !== answerId.id
        );
      }

      // console.log(CloneQuestions);
      setQuestions(CloneQuestions);
      // CloneQuestions = { answers: updateAnswers };
      // let updateAnswer = CloneQuestions.map((q) => {
      //   if (q.id === questionId.id) {
      //     let checkAnswer = q.answers.filter((a) => a.id !== answerId.id);

      //     return {
      //       ...q,
      //       answers: checkAnswer,
      //     };
      //   }
      //   return q;
      // });
      // CloneQuestions = updateAnswer;

      // setQuestions(CloneQuestions);
    }
  };

  return (
    <>
      <div className="container container-question">
        <div className="mt-3">
          <h5>Manage Questions </h5>
        </div>

        <div className="row">
          <div className="">
            <div className=" col-6 form-group">
              <label className="mb-1">Select Quiz:</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
            <label className="mt-3 mb-1">Add Questions:</label>
            {questions &&
              questions.length > 0 &&
              questions.map((q, index) => {
                return (
                  <div key={q.id} className="q-main ">
                    <div className="add-question-desc">
                      <div className=" col-6 form-floating  ">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="description"
                          value={q.description}
                        />
                        <label htmlFor="floatingInput">
                          Question's description
                        </label>
                      </div>
                      <div className="upload-image_question ">
                        <div className=" ">
                          <label
                            htmlFor="input-file"
                            className="icon-image-file"
                          >
                            <RiImageAddLine />
                          </label>
                          <input id="input-file" type="file" hidden />
                          <span className="uploadfile">
                            0 file this uploaded
                          </span>
                        </div>
                        <div className="btn-question ">
                          <button
                            className="add-question "
                            onClick={() => handleClickQ("ADD", "")}
                          >
                            <BsPatchPlusFill />
                          </button>
                          {questions && questions.length > 1 && (
                            <button
                              className="delete-question"
                              onClick={() =>
                                handleClickQ("REMOVE", { id: q.id })
                              }
                            >
                              <BsPatchMinusFill />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {q.answers &&
                      q.answers.length > 0 &&
                      q.answers.map((answers, index) => {
                        return (
                          <div key={answers.id} className="question-answer">
                            <input
                              type="checkbox"
                              className="question-answer_checkbox"
                            />
                            <div className="col-6 form-floating  ">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="description"
                                value={answers.description}
                              />
                              <label htmlFor="floatingInput">Answer</label>
                            </div>
                            <div className="btn-answer ">
                              <button
                                className="add-answer "
                                onClick={() =>
                                  handleClickA("ADDANSWER", {
                                    id: q.id,
                                  })
                                }
                              >
                                <FaSquarePlus />
                              </button>
                              {q.answers && q.answers.length > 1 && (
                                <button
                                  className="delete-answer"
                                  onClick={() =>
                                    handleClickA(
                                      "REMOVEANSWER",
                                      { id: q.id },
                                      { id: answers.id }
                                    )
                                  }
                                >
                                  <FaSquareMinus />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Questions;
