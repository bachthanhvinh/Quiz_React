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
};
