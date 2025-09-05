import App from "./App";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Authen/Login";
import Register from "./components/Authen/Register";
import ListQuiz from "./components/User/ListQuiz";
import DetaiQuiz from "./components/User/DetailQuiz";
import Error404 from "./components/Error404";
import ManageQuiz from "./components/Admin/Content/ManageQuiz/ManageQuiz";
import ManageUser from "./components/Admin/Content/ManageUser/ManageUser";
import ManageQuestion from "./components/Admin/Content/ManageQuestions/ManageQuestions";
import PrivateRouter from "./components/routes/PrivateRouter";
import { Suspense } from "react";
import PrivateAdminRouter from "./components/routes/PrivateAdminRouter";
// import { Suspense } from "react";

function Layout() {
  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="users"
            element={
              <PrivateRouter>
                <ListQuiz />
              </PrivateRouter>
            }
          />
        </Route>

        <Route path="/quiz/:id" element={<DetaiQuiz />} />

        <Route
          path="admin"
          element={
            <PrivateAdminRouter>
              <Admin />
            </PrivateAdminRouter>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManageUser />} />
          <Route path="manage-quizzes" element={<ManageQuiz />} />
          <Route path="manage-questions" element={<ManageQuestion />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Suspense>
  );
}
export default Layout;
