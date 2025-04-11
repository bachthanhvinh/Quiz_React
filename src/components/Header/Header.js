import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("login");
  };
  const handleClickRegister = () => {
    navigate("register");
  };
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Logo
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
                <NavDropdown.Item>Log out</NavDropdown.Item>
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
