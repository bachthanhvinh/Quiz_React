import { useSelector } from "react-redux";
import videoHomepage from "../../assets/video-homepage.mp4";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = (props) => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isAuthenticated);
  const { t } = useTranslation();
  return (
    <>
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
        </video>
        <div className="homepage-better">
          <h1 className="homepage-better__h2">{t("homepage.title1")}</h1>
          <p className="homepage-better__p">{t("homepage.title2")}</p>
          <div>
            {isLogin === true ? (
              <button
                className="btn bg-black text-white mb-4 mt-4"
                onClick={() => navigate("users")}
              >
                {t("homepage.button.btn1")}
              </button>
            ) : (
              <button
                className="btn bg-black text-white mb-4 mt-4"
                onClick={() => navigate("login")}
              >
                {t("homepage.button.btn2")}
              </button>
            )}
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              {t("homepage.commit.cm1")}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              {t("homepage.commit.cm2")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
