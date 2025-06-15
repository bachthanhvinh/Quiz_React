import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./ChangePassword.scss";
import { changePasswordUser } from "../../../services/apiServices";
import { toast } from "react-toastify";
const ChangePassword = () => {
  const [passwordUser, setPasswordUser] = useState({
    currentPassword: "",
    newPassword: "",
    comfirmPassword: "",
  });
  const handleChangePassword = (e) => {
    setPasswordUser({
      ...passwordUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatePassword = async () => {
    if (passwordUser.newPassword !== passwordUser.comfirmPassword) {
      toast.error("new password and confirm password are incorrect");
    } else {
      const res = await changePasswordUser(
        passwordUser.currentPassword,
        passwordUser.newPassword
      );
      console.log(res);
    }
  };
  return (
    <>
      <div className="container">
        <Row className="mb-3 ">
          <Form.Group
            as={Col}
            md="4"
            className="mb-3 "
            controlId="validationCustom01"
          >
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              placeholder="Current Password"
              name="currentPassword"
              type="text"
              value={passwordUser.currentPassword}
              onChange={(e) => handleChangePassword(e)}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3 lb-comfirm1"
            controlId="validationCustom02"
          >
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="New Password"
              name="newPassword"
              value={passwordUser.newPassword}
              onChange={(e) => handleChangePassword(e)}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} md="4" className="mb-3 lb-comfirm">
          <Form.Label>Comfirm password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comfirm password"
            name="comfirmPassword"
            value={passwordUser.comfirmPassword}
            onChange={(e) => handleChangePassword(e)}
          />
        </Form.Group>
        <button
          className="btn btn-warning"
          onClick={() => handleUpdatePassword()}
        >
          Update
        </button>
      </div>
    </>
  );
};
export default ChangePassword;
