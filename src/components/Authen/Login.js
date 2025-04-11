import { useState } from "react";
import "./Login.scss";
import { LoginUser } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("Invalid Email !");

      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }

    const data = await LoginUser(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
      dispatch(doLogin(data));
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="Login-container">
        <div className="SignUp-account d-flex justify-content-end align-items-center mt-2">
          <span>Don't have an account yet?</span>
          <button
            className="btn-SignUpUser btn mx-2"
            onClick={() => handleSignup()}
          >
            Sign up
          </button>
          <span className="me-5 text-decoration-underline">Need help?</span>
        </div>
        <div className="form-content col-4 mx-auto">
          <div className="text-center">
            <h2 className="mb-5 mt-5">Quizform</h2>
            <h4 className="mb-4">Hello, who's this?</h4>
          </div>
          <form>
            <div className="content-form ">
              <div className="form-group">
                <label className="mb-3">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="form-group">
                <label className="mb-3 mt-3">Password</label>
                <input
                  type="password"
                  className="form-control "
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="d-flex flex-column">
                <span className="mt-3 mb-4 text-decoration-underline ">
                  Forgot password ?{" "}
                </span>
                <button
                  className="btn-loginUser btn mt-3 "
                  onClick={(e) => handleLogin(e)}
                >
                  Log in to Quiz
                </button>
              </div>
            </div>
          </form>
          <div className="goBackHome" onClick={() => navigate("/")}>
            <span className="back"> &#60;&#60; Go back home</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
