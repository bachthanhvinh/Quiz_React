import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo192.png";
import "./Header.scss";
import { LogOut } from "../../services/apiServices";
import { toast } from "react-toastify";
import { doLogOut } from "../../redux/action/userAction";
const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("login");
  };
  const handleClickRegister = () => {
    navigate("register");
  };
  const handleClickLogOut = async () => {
    const res = await LogOut(account.email, account.refresh_token);
    if (res?.EC === 0) {
      toast.success(res?.EM);
      dispatch(doLogOut());
      navigate("/login");
    } else {
      toast.error(res?.EM);
    }
  };
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img className="logo-header" src={`${logo}`} alt="Logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink className="nav-link" to="users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="admin">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button
                  className="btn-login"
                  onClick={() => handleClickLogin()}
                >
                  Log in
                </button>
                <button
                  className="btn-signUp"
                  onClick={() => handleClickRegister()}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleClickLogOut()}>
                  Log out
                </NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
