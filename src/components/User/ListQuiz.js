import { useEffect, useState } from "react";
import { getQuizUser } from "../../services/apiServices";
import { useSelector } from "react-redux";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";
function ListQuiz() {
  const [dataQuiz, setDataQuiz] = useState([]);
  const Nagivate = useNavigate();

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
                    <h5 className="card-title">Quiz {index + 1}</h5>
                    <p className="card-text">{quiz.description}</p>

                    <a
                      className="btn btn-primary  "
                      onClick={() =>
                        Nagivate(`/quiz/${quiz.id}`, {
                          state: { titleQuiz: quiz.description, id: quiz.id },
                        })
                      }
                    >
                      Go Quiz now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>You're don't have any quiz now</div>
      )}
    </div>
  );
}

export default ListQuiz;
