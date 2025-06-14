import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaReact,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Admin.scss";
const SideBar = (props) => {
  const navigate = useNavigate();
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <>
      <ProSidebar
        image={image ? sidebarBg : false}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="d-flex align-items-center gap-2 "
          >
            <span className="logo-sidebar">
              <FaReact size={"2em"} color="rgb(0 255 255)" />
            </span>
            <span className="logo-quiz" onClick={() => navigate("/")}>
              {" "}
              Quiz
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}

              // suffix={<span className="badge red">New</span>}
            >
              <NavLink to="/admin">{t("pageSidebar.dashboard")}</NavLink>
            </MenuItem>

            {/* <MenuItem icon={<FaGem />}>Components</MenuItem> */}
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              icon={<FaGem />}
              title={i18n.language === "vi" ? "Quản lý" : "Manage"}
            >
              <MenuItem>
                <NavLink
                  to="/admin/manage-users"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  {t("pageSidebar.ManageUser")}
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/admin/manage-quizzes"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  {t("pageSidebar.ManageQuizzes")}
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/admin/manage-questions"
                  className={({ isActive }) => (isActive ? "active_menu" : "")}
                >
                  {t("pageSidebar.ManageQuestions")}
                </NavLink>
              </MenuItem>
            </SubMenu>
            {/* <SubMenu
              suffix={<span className="badge yellow">3</span>}
              icon={<FaRegLaughWink />}
            >
              <MenuItem> Quản lý Users</MenuItem>
              <MenuItem> Quản lý Bài Quiz</MenuItem>
              <MenuItem> Quản lý Câu Hỏi</MenuItem>
            </SubMenu> */}
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/bachthanhvinh"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                bachthanhvin
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
