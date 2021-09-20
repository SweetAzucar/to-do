import { Modal, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import useStore from "../store/store";

function CustomModal(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const { toggleModal, updateTodo, showModal, selectedTodo } = useStore(
    (state) => state
  );

  const handleUpdate = () => {
    if (todoTitle) {
      updateTodo(selectedTodo.id, {
        title: todoTitle,
        description: todoDescription,
      });
      toggleModal();
    }
  };

  useEffect(() => {
    setTodoTitle(selectedTodo.title);
    setTodoDescription(selectedTodo.description);
  }, [selectedTodo.description, selectedTodo.title]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={toggleModal}
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
              <input
                type="text"
                className="modal-input"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="modal-label m-0">Description</Form.Label>
              <div>
                <textarea
                  className="modal-textarea"
                  rows={3}
                  placeholder="Add a description..."
                  value={todoDescription}
                  onChange={(e) => setTodoDescription(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={toggleModal} className="modal-button">
            Close
          </button>
          <button onClick={handleUpdate} className="modal-button">
            Submit
          </button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CustomModal;
