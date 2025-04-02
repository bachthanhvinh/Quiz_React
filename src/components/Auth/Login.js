import { useState } from "react";
import "./Login.scss";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("me");
  };
  return (
    <>
      <div className="Login-container">
        <div className="SignUp-account d-flex justify-content-end align-items-center mt-2">
          <div>Don't have an account yet?</div>
          <button className="btn-SignUpUser btn mx-2">Sign up</button>
          <div className="me-2">Need help</div>
        </div>
        <div className="form-content col-4 mx-auto">
          <div className="text-center">
            <h2 className="mb-5 mt-5">Quizform</h2>
            <h4 className="mb-4">Hello, who's this?</h4>
          </div>

          <div className="content-form ">
            <div className="form-group">
              <label className="mb-3">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="mb-3 mt-3">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-flex flex-column">
              <span className="mt-3 mb-4 text-decoration-underline ">
                Forgot password ?{" "}
              </span>
              <button
                className="btn-loginUser btn "
                onClick={() => handleLogin()}
              >
                Log in to Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
