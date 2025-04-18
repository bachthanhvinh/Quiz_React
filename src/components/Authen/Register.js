import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useEffect, useRef, useState } from "react";
import { IoIosEye, IoIosEyeOff, oIosEye } from "react-icons/io";
import { RegisterUser } from "../../services/apiServices";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const checkuref = useRef(null);

  useEffect(() => {
    checkuref.current.focus();
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitRegister = async (e) => {
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

    const data = await RegisterUser(email, username, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleClickToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="register-container   ">
        <div className="form-content mx-auto col-4 ">
          <div className="text-center mt-5">
            <h2 className="form-content__h2 mb-4">Quizform</h2>
            <h4 className="mb-5">Start your journey?</h4>
          </div>

          {/* <form noValidate>
            <div className="content-form ">
              <div className="form-group">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="current-email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="mb-2 mt-3">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="current-username"
                />
              </div>
              <div className="form-group">
                <label className="mb-2 mt-3">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="mt-5 mb-4">
                {" "}
                <button
                  type="submit"
                  className="btn btn-register"
                  onClick={(e) => handleSubmitRegister(e)}
                >
                  Register
                </button>
              </div>
            </div>
          </form> */}
          <form onSubmit={(e) => handleSubmitRegister(e)}>
            <div className="content-form">
              <div className="form-group">
                <label className="mb-2">Email (*)</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email@gmail.com"
                  autoComplete="current-email"
                  //   required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={checkuref}
                />
              </div>
              <div className="form-group  Toggle-password">
                <label className="mb-2 mt-3">Password (*)</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control "
                  placeholder="Password"
                  autoComplete="current-password"
                  //   required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <IoIosEye
                    className="isToggle"
                    onClick={() => handleClickToggle()}
                  />
                ) : (
                  <IoIosEyeOff
                    className="isToggle"
                    onClick={() => handleClickToggle()}
                  />
                )}
              </div>
              <div className="form-group">
                <label className="mb-2 mt-3">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  autoComplete="current-username"
                  //   required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mt-3 mb-4">
                <button type="submit" className="btn btn-register">
                  Create my free account
                </button>
              </div>
            </div>
          </form>
          <div className="text-center" onClick={() => navigate("/")}>
            <span className="back"> &#60;&#60; Go back home</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
