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
import { Link, useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const navigate = useNavigate();
  const { image, collapsed, toggled, handleToggleSidebar } = props;
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
          >
            <FaReact size={"2em"} color="rgb(0 255 255)" />
            <span className="logo-sidebar" onClick={() => navigate("/")}>
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
              Dashboard
              <Link to="/admin" />
            </MenuItem>
            {/* <MenuItem icon={<FaGem />}>Components</MenuItem> */}
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title={"Features"}>
              <MenuItem>
                Quản lý Users
                <Link to="/admin/manage-users" />
              </MenuItem>
              <MenuItem>
                {" "}
                Quản lý Bài Quiz
                <Link to="/admin/manage-quizzes" />
              </MenuItem>
              <MenuItem> Quản lý Câu Hỏi</MenuItem>
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
