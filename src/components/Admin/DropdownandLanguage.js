import { NavDropdown } from "react-bootstrap";
import Language from "../Header/Language";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/apiServices";
import { doLogOut } from "../../redux/action/userAction";
import { toast } from "react-toastify";
import "./Admin.scss";
const DropdownandLanguage = () => {
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const res = await logout(account.email, account.refresh_token);
    if (res && res.EC === 0) {
      dispatch(doLogOut());
      navigate("/login");
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <>
      <div className="Dropdown">
        <NavDropdown
          title={i18n.language === "vi" ? "Tùy chỉnh" : "Settings"}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item onClick={() => handleLogOut()}>
            {t("header.authen.logout")}
          </NavDropdown.Item>
          <NavDropdown.Item> {t("header.authen.profile")}</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Language />
      </div>
    </>
  );
};
export default DropdownandLanguage;
