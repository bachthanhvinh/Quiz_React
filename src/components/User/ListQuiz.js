import { useEffect, useState } from "react";
import { getQuizUser } from "../../services/apiServices";
import { useSelector } from "react-redux";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTranslation } from "react-i18next";

function ListQuiz() {
  const [dataQuiz, setDataQuiz] = useState([]);
  const Nagivate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // const res = await getQuizUser();
    getQuiz();
  }, []);

  const getQuiz = async () => {
    const res = await getQuizUser();
    setDataQuiz(res.DT);
  };

  // console.log(dataQuiz);
  return (
    <div className="list_quiz">
      <PerfectScrollbar>
        <div className="container quiz-List card-item  ">
          {dataQuiz && dataQuiz.length > 0 ? (
            <>
              {dataQuiz.map((quiz, index) => {
                return (
                  <div key={`${quiz.id}-card`} className="mt-5">
                    <div
                      className="card cart-quiz-item  "
                      style={{ width: "18rem" }}
                    >
                      <div className="card-img-item">
                        <img
                          className="card-img-top "
                          src={`data:image/png;base64,${quiz.image}`}
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body  ">
                        <h5 className="card-title">
                          {t("pageUsers.quiz")} {index + 1}
                        </h5>
                        <p className="card-text">{quiz.description}</p>

                        <a
                          className="btn btn-primary  "
                          onClick={() =>
                            Nagivate(`/quiz/${quiz.id}`, {
                              state: {
                                titleQuiz: quiz.description,
                                id: quiz.id,
                              },
                            })
                          }
                        >
                          {t("pageUsers.btnGoQuiz")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div>{t("pageUsers.noData")} </div>
          )}
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default ListQuiz;
