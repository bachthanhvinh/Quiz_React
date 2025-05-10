import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";

function FormViewUser(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    role,
    setRole,
    image,
    setImage,
    previewImage,
    setPreviewImage,
    dataUpdate,
  } = props;

  //   const handleUploadImage = (event) => {
  //     if (event.target && event.target.files && event.target.files[0]) {
  //       setPreviewImage(URL.createObjectURL(event.target.files[0]));
  //       setImage(event.target.files[0]);
  //     }
  //     console.log("upload File", event.target.files[0]);
  //   };
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter email"
            defaultValue={email}
            disabled
            // onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Password"
            defaultValue={password}
            disabled
            // onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            defaultValue={username}
            disabled
            // onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={role}
            readOnly
            disabled
            // onChange={(event) => setRole(event.target.value)}
          >
            <option defaultValue="USER">USER</option>
            <option defaultValue="ADMIN">ADMIN</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formImages">
          {/* <Form.Label className="label-upload">
            <FcPlus /> Upload File Image
          </Form.Label> */}
          <Form.Control
            type="file"
            hidden
            disabled
            // value={image}
            // onChange={(event) => handleUploadImage(event)}
          />
        </Form.Group>
        <div className="col-md-12 img-preview">
          {previewImage ? (
            <img src={previewImage} />
          ) : (
            <span>Preview Image</span>
          )}
        </div>
      </Row>
    </Form>
  );
}

export default FormViewUser;
