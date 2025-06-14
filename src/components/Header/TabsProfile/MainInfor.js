import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import "./MainInfor.scss";
import { updateProfileUser, updateUser } from "../../../services/apiServices";
import { toast } from "react-toastify";
import { newDataProfile } from "../../../redux/action/userAction";

const MainInfor = (props) => {
  const dispatch = useDispatch();
  const { setShow } = props;
  const account = useSelector((state) => state.user.account);
  const [data, setData] = useState({
    image: null,
    username: "",
    previewImage: "",
  });
  const ResetData = () => {
    setData({
      image: null,
      username: "",
      previewImage: "",
    });
    setShow(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setData((prev) => ({
        ...prev,
        image: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      username: account.username || "",
      previewImage: account.image
        ? `data:image/jpeg;base64,${account.image}`
        : "",
    }));
  }, [account]);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleUpdateProfile = async () => {
    const res = await updateProfileUser(data.username, data.image);
    console.log(res);
    console.log(data.image);
    if (res && res.EC === 0) {
      toast.success(res.EM);

      const fullBase64 = await getBase64(data.image);
      const pureBase64 = fullBase64.split(",")[1];
      dispatch(
        newDataProfile({
          username: data.username || account.username,
          image: pureBase64 || account.image,
        })
      );
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Enter email"
              name="email"
              value={account.email}
              disabled
              //   onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Password"
              value={account.password}
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username"
              name="username"
              value={data.username}
              // onChange={(event) => setUsername(event.target.value)}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Role</Form.Label>
            <Form.Select value={account.role} disabled>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formImages">
            <Form.Label className="label-upload">
              <FcPlus /> Upload File Image
            </Form.Label>
            <Form.Control
              type="file"
              name="image"
              hidden
              // value={image}
              onChange={(event) => handleUploadImage(event)}
            />
          </Form.Group>
          <div className="col-md-12 img-preview">
            {data.previewImage ? (
              <img src={data.previewImage} />
            ) : (
              <span>Preview Image</span>
            )}
          </div>
        </Row>
      </Form>
      <button className="btn btn-warning" onClick={() => handleUpdateProfile()}>
        Update
      </button>
    </>
  );
};

export default MainInfor;
