import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuestion } from "../../services/apiServices";

function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  useEffect(() => {
    fetchdataQuiz();
  }, [quizId]);

  const fetchdataQuiz = async () => {
    const res = await getDataQuestion(quizId);
    console.log(res);
  };
  return (
    <>
      <div>DetaiQuiz</div>
    </>
  );
}
export default DetaiQuiz;
