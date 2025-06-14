import { Modal, Tab, Tabs } from "react-bootstrap";
import MainInfor from "./TabsProfile/MainInfor";

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
              Tab content for Home
            </Tab>
            <Tab eventKey="History" title="History">
              Tab content for Contact
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProfile;
