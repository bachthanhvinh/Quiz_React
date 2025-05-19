import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import {
  BsPatchMinus,
  BsPatchMinusFill,
  BsPatchPlus,
  BsPatchPlusFill,
  BsPlusSquareFill,
} from "react-icons/bs";
import { RiImageAddLine } from "react-icons/ri";
import "./QuizQA.scss";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
import {
  getQuizAll,
  postCreateNewAnswerForQuiz,
  postCreateNewQuestionForQuiz,
  getQuizWithQA,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";

function QuizQA() {
  const initQuiz = useMemo(
    () => [
      {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        isCheckQ: true,
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
            isCheckA: true,
          },
        ],
      },
    ],
    []
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [DataSelectedOption, setDataSelectedOption] = useState([]);

  useEffect(() => {
    handleClickDataOptions();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchApiQuizAnswerQuiz();
      console.log(selectedOption);
    }
  }, [selectedOption]);

  // return a promise that resolves with a File instance
  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: mimeType }));
  }

  const fetchApiQuizAnswerQuiz = async () => {
    const res = await getQuizWithQA(selectedOption.value);
    let newQ = [];
    for (let i = 0; i < res.DT.qa.length; i++) {
      let q = res.DT.qa[i];
      if (q.imageFile) {
        q.imageName = `Question-${q.id}.png`;
        q.imageFile = await urltoFile(
          `data:File/png;base64,${q.imageFile}`,
          `Question-${q.id}.png`,
          "File/png"
        );
      }

      newQ.push(q);
    }

    if (res && res.DT && res.DT.qa) {
      setQuestions([...newQ]);
    }
  };

  const handleClickDataOptions = async () => {
    const res = await getQuizAll();

    const options =
      res &&
      res.DT &&
      res.DT.map((options) => {
        return {
          value: options.id,
          label: `${options.id} - ${options.description}`,
        };
      });
    setDataSelectedOption(options);
  };

  const [dataPreview, setDataPreview] = useState({
    src: "",
    title: "",
  });
  const [questions, setQuestions] = useState(initQuiz);

  const handleClickQ = (type, questionId) => {
    if (type === "ADD") {
      let CloneQuestions = _.cloneDeep(questions);

      const newQuestions = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        isCheckQ: true,
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
            isCheckA: true,
          },
        ],
      };

      setQuestions([...CloneQuestions, newQuestions]);
    }
    if (type === "REMOVE") {
      let CloneQuestions = _.cloneDeep(questions);

      CloneQuestions = CloneQuestions.map((q) => {
        if (q.id === questionId.id) {
          return {
            ...q,
            isRemoving: true,
          };
        }
        return q;
      });
      setQuestions(CloneQuestions);

      setTimeout(() => {
        const updated = CloneQuestions.filter(
          (item) => item.id !== questionId.id
        );
        setQuestions(updated);
      }, 300);
    }
  };
  const handleClickA = (type, questionId, answerId) => {
    if (type === "ADDANSWER") {
      let CloneQuestions = _.cloneDeep(questions);

      const newAnswers = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
        isCheckA: true,
      };
      let UpdateQuestion = CloneQuestions.map((q) => {
        if (q.id === questionId.id) {
          return {
            ...q,
            answers: [...q.answers, newAnswers],
          };
        }
        return q;
      });
      setQuestions(UpdateQuestion);
    }

    if (type === "REMOVEANSWER") {
      let CloneQuestions = _.cloneDeep(questions);

      const index = CloneQuestions.findIndex((q) => q.id === questionId.id);

      if (index !== -1) {
        CloneQuestions[index].answers = CloneQuestions[index].answers.map((a) =>
          a.id === answerId.id ? { ...a, isRemoving: true } : a
        );
        setQuestions(CloneQuestions);

        setTimeout(() => {
          CloneQuestions[index].answers = CloneQuestions[index].answers.filter(
            (a) => a.id !== answerId.id
          );
          setQuestions([...CloneQuestions]);
        }, 300);
      }
    }
  };

  const handleOnChangeQuestion = (type, qId, value) => {
    if (type === "QUESTION") {
      let CloneQuestions = _.cloneDeep(questions);
      let index = CloneQuestions.findIndex((q) => q.id === qId);
      CloneQuestions[index].description = value;
      setQuestions(CloneQuestions);
    }
  };
  const handleOnchangeQuestionFile = (qId, event) => {
    let CloneQuestions = _.cloneDeep(questions);
    let index = CloneQuestions.findIndex((q) => q.id === qId);
    if (
      index !== -1 &&
      event.target &&
      event.target.files &&
      event.target.files[0]
    ) {
      CloneQuestions[index].imageFile = event.target.files[0];
      CloneQuestions[index].imageName = event.target.files[0].name;
      setQuestions(CloneQuestions);
    }
  };
  const handleOnChangeAnswer = (type, qId, aId, value) => {
    let CloneQuestions = _.cloneDeep(questions);

    const index = CloneQuestions.findIndex((q) => q.id === qId);

    if (index > -1) {
      CloneQuestions[index].answers = CloneQuestions[index].answers.map((a) => {
        if (a.id === aId) {
          if (type === "ANSWER") {
            a.description = value;
          }
          if (type === "CHECKBOX") {
            a.isCorrect = value;
          }
        }
        return a;
      });
      setQuestions(CloneQuestions);
    }
  };

  const handleSubmitQuestionForQuiz = async () => {
    //valid
    if (_.isEmpty(selectedOption)) {
      toast.error("Cannot empty quiz");
      return;
    }

    let isvalidq = true;
    let flagQ1 = 0;
    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].description) {
        questions[i].isCheckQ = false;
        isvalidq = false;
        flagQ1 = i;
        break;
      }
    }
    if (isvalidq === true) {
      questions.map((q) => {
        q.isCheckQ = true;
      });
      setQuestions([...questions]);
    }
    if (isvalidq === false) {
      setQuestions([...questions]);
      toast.error(`Not empty valid  Question ${flagQ1 + 1} `);
      return;
    }

    let isvalidAnswer = true;
    let flagQ = 0,
      flagA = 0;
    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < questions[i].answers.length; j++) {
        if (!questions[i].answers[j].description) {
          questions[i].answers[j].isCheckA = false;
          isvalidAnswer = false;
          flagA = j;
          flagQ = i;
          break;
        }
      }
      if (isvalidAnswer === false) break;
    }

    if (isvalidAnswer === true) {
      questions.forEach((q) => {
        q.answers.forEach((a) => {
          a.isCheckA = true;
        });
      });

      setQuestions([...questions]);
    }

    if (isvalidAnswer === false) {
      setQuestions([...questions]);
      toast.error(
        `Not empty valid Answer ${flagA + 1}  at Question ${flagQ + 1}`
      );
      return;
    }

    const hasCorrectAnswer = questions.some((q) =>
      q.answers.some((a) => a.isCorrect === true)
    );
    if (!hasCorrectAnswer) {
      toast.error(`at least 1 question correct!`);
      return;
    }

    ///////////////// sử dụng Promise tối ưu nhưng không chạy tuần tự mà chạy song song nên thay thế dùng for
    //  await Promise.all(
    //   questions.map(async (q) => {
    //     const question = await postCreateNewQuestionForQuiz(
    //       +selectedOption.value,
    //       q.description,
    //       q.imageFile
    //     );
    //     await Promise.all(
    //       q.answers.map(async (a) => {
    //         await postCreateNewAnswerForQuiz(
    //           a.description,
    //           a.isCorrect,
    //           question.DT.id
    //         );
    //       })
    //     );
    //     return question;
    //   })
    // );

    for (let q of questions) {
      const question = await postCreateNewQuestionForQuiz(
        +selectedOption.value,
        q.description,
        q.imageFile
      );
      for (let a of q.answers) {
        await postCreateNewAnswerForQuiz(
          a.description,
          a.isCorrect,
          question.DT.id
        );
      }
    }
    toast.success(`create question and answer success!`);
    setQuestions(initQuiz);
  };
  const handleClickPreview = (qId) => {
    const CloneQuestions = _.cloneDeep(questions);

    const index = CloneQuestions.findIndex((q) => q.id === qId);

    if (index > -1) {
      setDataPreview(
        {
          src: URL.createObjectURL(CloneQuestions[index].imageFile),
          title: CloneQuestions[index].imageName,
        },
        setIsPreview(true)
      );
    }
    // console.log(dataPreview);
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
                options={DataSelectedOption}
              />
            </div>
            <label className="mt-3 mb-1">Add Questions:</label>
            {questions &&
              questions.length > 0 &&
              questions.map((q, index) => {
                return (
                  <div
                    key={q.id}
                    className={`q-main ${q.isRemoving ? "removing" : ""}`}
                  >
                    <div className="add-question-desc">
                      <div className=" col-6 form-floating  ">
                        <input
                          type="text"
                          className={
                            // q?.isCheckQ
                            `form-control `
                            // : `form-control is-invalid`
                          }
                          id="floatingInput"
                          placeholder="description"
                          value={q.description}
                          onChange={(event) =>
                            handleOnChangeQuestion(
                              "QUESTION",
                              q.id,
                              event.target.value
                            )
                          }
                        />
                        <label htmlFor="floatingInput">
                          Question {`${index + 1}`} 's description
                        </label>
                      </div>
                      <div className="upload-image_question ">
                        <div className=" ">
                          <label
                            htmlFor={`${q.id}`}
                            className="icon-image-file"
                          >
                            <RiImageAddLine />
                          </label>
                          <input
                            id={`${q.id}`}
                            type="file"
                            onChange={(event) =>
                              handleOnchangeQuestionFile(q.id, event)
                            }
                            hidden
                          />
                          {q.imageName.length > 0 ? (
                            <span
                              className="uploadfile"
                              onClick={() => handleClickPreview(q.id)}
                            >
                              {q.imageName}
                            </span>
                          ) : (
                            <span className="uploadfile">
                              0 file this uploaded
                            </span>
                          )}
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
                          <div
                            key={answers.id}
                            className={`question-answer ${
                              answers.isRemoving ? "removing" : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="question-answer_checkbox"
                              checked={answers.isCorrect}
                              onChange={(event) =>
                                handleOnChangeAnswer(
                                  "CHECKBOX",
                                  q.id,
                                  answers.id,
                                  event.target.checked
                                )
                              }
                            />
                            <div className="col-6 form-floating  ">
                              <input
                                type="text"
                                className={
                                  // answers?.isCheckA
                                  `form-control `
                                  // : `form-control is-invalid`
                                }
                                id="floatingInput"
                                placeholder="description"
                                value={answers.description}
                                onChange={(event) =>
                                  handleOnChangeAnswer(
                                    "ANSWER",
                                    q.id,
                                    answers.id,
                                    event.target.value
                                  )
                                }
                              />
                              <label htmlFor="floatingInput">
                                Answer {`${index + 1}`}
                              </label>
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
            {questions && questions.length > 0 && (
              <div>
                <button
                  className="btn btn-warning mb-5"
                  onClick={() => handleSubmitQuestionForQuiz()}
                >
                  Save Question
                </button>
              </div>
            )}
            {isPreview && (
              <Lightbox
                image={dataPreview.src}
                title={dataPreview.title}
                onClose={() => setIsPreview(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default QuizQA;
