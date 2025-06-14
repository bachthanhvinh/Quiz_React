import axios from "../utils/axiosCustomize.js";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUser = () => {
  return axios.get("api/v1/participant/all");
};
const updateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const LoginUser = (email, password) => {
  return axios.post(`api/v1/login`, { email, password });
};
const RegisterUser = (email, username, password) => {
  return axios.post(`api/v1/register`, { email, username, password });
};

const getQuizUser = () => {
  return axios.get(`api/v1/quiz-by-participant`);
};
const getDataQuestion = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`);
};
const postFinishResult = (data) => {
  // console.log(" >> check ", { ...data });
  return axios.post(`api/v1/quiz-submit`, { ...data });
};

const postCreateQuiz = (name, description, difficuly, userImage) => {
  //submit data
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficuly);
  data.append("quizImage", userImage);
  return axios.post("api/v1/quiz", data);
};
const getQuizAll = () => {
  return axios.get(`api/v1/quiz/all`);
};

const updateQuiz = (id, description, name, difficulty, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.put("api/v1/quiz", data);
};

const deleteQuiz = (QuizId) => {
  return axios.delete(`api/v1/quiz/${QuizId}`);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, questionImage) => {
  //submit data
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", questionImage);
  return axios.post("api/v1/question", data);
};
const postCreateNewAnswerForQuiz = (
  description,
  correct_answer,
  question_id
) => {
  return axios.post("api/v1/answer", {
    description,
    correct_answer,
    question_id,
  });
};
const AssignQuizToUser = (quizId, userId) => {
  const data = new FormData();
  data.append("quizId", quizId);
  data.append("userId", userId);
  return axios.post("api/v1/quiz-assign-to-user", data);
};

const getQuizWithQA = (QuizId) => {
  return axios.get(`api/v1/quiz-with-qa/${QuizId}`);
};

const UpsertQuizWithQA = (data) => {
  return axios.post(`api/v1/quiz-upsert-qa`, { ...data });
};
const logout = (email, refresh_token) => {
  return axios.post(`api/v1/logout`, { email, refresh_token });
};
const getOverView = () => {
  return axios.get(`api/v1/overview`);
};
const refresh_tokenUser = (email, refresh_token) => {
  return axios.post(`api/v1/refresh-token`, { email, refresh_token });
};
const updateProfileUser = (username, userImage) => {
  const data = new FormData();
  data.append("username", username);
  data.append("userImage", userImage);
  return axios.post("api/v1/profile", data);
};
export {
  postCreateNewUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserWithPaginate,
  LoginUser,
  RegisterUser,
  getQuizUser,
  getDataQuestion,
  postFinishResult,
  postCreateQuiz,
  getQuizAll,
  updateQuiz,
  deleteQuiz,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuiz,
  AssignQuizToUser,
  getQuizWithQA,
  UpsertQuizWithQA,
  logout,
  getOverView,
  refresh_tokenUser,
  updateProfileUser,
};
