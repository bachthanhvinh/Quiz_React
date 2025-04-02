import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import sidebarBg from "../../assets/bg2.jpg";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar image={sidebarBg} collapsed={collapsed} />
      </div>
      <div className="admin-content">
        {/* onClick={} */}
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)} />
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Admin;
