import { useEffect, useRef, useState } from "react";
import "./Login.scss";
import { LoginUser } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner2 } from "react-icons/im";
import Language from "../Header/Language";
import { useTranslation } from "react-i18next";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [checkDisabled, setCheckDisabled] = useState(false);
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
    setCheckDisabled(true);

    const data = await LoginUser(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      dispatch(doLogin(data));
      setCheckDisabled(false);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setCheckDisabled(false);
    }
  };
  const handleSignup = () => {
    navigate("/register");
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="Login-container">
        <div className="SignUp-account d-flex justify-content-end align-items-center mt-2 container">
          <span>{t("pagelogin.noAccount")}</span>
          <button
            className="btn-SignUpUser btn mx-2"
            onClick={() => handleSignup()}
          >
            {t("pagelogin.signup")}
          </button>
          <span className="me-5 text-decoration-underline">
            {" "}
            {t("pagelogin.needhelp")}
          </span>
          <Language />
        </div>
        <div className="form-content col-4 mx-auto">
          <div className="text-center">
            <h2 className="mb-5 mt-5">{t("pagelogin.Quizform")}</h2>
            <h4 className="mb-4">{t("pagelogin.hello")}</h4>
          </div>
          <form>
            <div className="content-form ">
              <div className="form-group">
                <label className="mb-3">{t("pagelogin.Email")}</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="current-password"
                  ref={checkuref}
                />
              </div>
              <div className="form-group">
                <label className="mb-3 mt-3">{t("pagelogin.Password")}</label>
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
                  {t("pagelogin.fpassword")}{" "}
                </span>
                <button
                  className="btn-loginUser btn mt-3 "
                  onClick={(e) => handleLogin(e)}
                  disabled={checkDisabled}
                >
                  {checkDisabled === true && (
                    <ImSpinner2 className="loaderIcon" />
                  )}
                  {t("pagelogin.login")}
                </button>
              </div>
            </div>
          </form>
          <div className="goBackHome" onClick={() => navigate("/")}>
            <span className="back"> &#60;&#60; {t("pagelogin.Gohome")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
