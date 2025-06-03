import { NavDropdown } from "react-bootstrap";

const Language = () => {
  return (
    <>
      <NavDropdown
        title="Việt Nam"
        id="basic-nav-dropdown1"
        className="language"
      >
        <NavDropdown.Item>Việt Nam</NavDropdown.Item>
        <NavDropdown.Item>English</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </>
  );
};

export default Language;
