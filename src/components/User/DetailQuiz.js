import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuestion } from "../../services/apiServices";
import _ from "lodash";

function DetaiQuiz() {
  const param = useParams();
  const quizId = param.id;
  useEffect(() => {
    fetchdataQuiz();
  }, [quizId]);

  const fetchdataQuiz = async () => {
    const res = await getDataQuestion(quizId);
    let raw = res.DT;
    console.log(raw);
    if (res && res.EC === 0) {
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answersUser = [];
          let description,
            image = null;
          value.map((item, index) => {
            if (index === 0) {
              description = item.description;
              image = item.image;
            }
            answersUser.push(item.answers.description);
          });
          return {
            questionId: +key,
            answers: answersUser,
            description,
            image,
          };
        })
        .value();
      console.log(data);
    }
  };
  return (
    <>
      <div>DetaiQuiz</div>
    </>
  );
}
export default DetaiQuiz;
