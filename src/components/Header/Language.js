import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Language.scss";
const Language = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguge = (language) => {
    i18n.changeLanguage(language);
    console.log(i18n.language);
  };
  return (
    <>
      <NavDropdown
        title={i18n.language === "en" ? "English" : "Việt Nam"}
        id="basic-nav-dropdown1"
        className="language"
      >
        <NavDropdown.Item onClick={() => handleChangeLanguge("vi")}>
          Việt Nam
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguge("en")}>
          English
        </NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </>
  );
};

export default Language;
