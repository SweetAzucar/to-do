import { Modal, Form } from "react-bootstrap";

function CustomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="custom-modal">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title id="contained-modal-title-vcenter">
            Update todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label m-0">Title</Form.Label>
              <input type="text" className="modal-input" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="modal-label m-0">Description</Form.Label>
              <div>
                <textarea
                  className="modal-textarea"
                  rows={3}
                  placeholder="Add a description..."
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="modal-button">
            Close
          </button>
          <button onClick={props.onHide} className="modal-button">
            Submit
          </button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CustomModal;
