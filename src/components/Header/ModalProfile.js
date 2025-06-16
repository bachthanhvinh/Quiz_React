import { Modal, Tab, Tabs } from "react-bootstrap";
import MainInfor from "./TabsProfile/MainInfor";
import ChangePassword from "./TabsProfile/ChangePassword";
import History from "./TabsProfile/History";

const ModalProfile = (props) => {
  const { show, setShow } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Thông tin người dùng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="User Information"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="User Information" title="User Information">
              <MainInfor setShow={setShow} />
            </Tab>
            <Tab eventKey="Change Password" title="Change Password">
              <ChangePassword />
            </Tab>
            <Tab eventKey="History" title="History">
              <History />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProfile;
