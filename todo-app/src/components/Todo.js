import React from "react";
import CustomToggle from "./CustomToggle";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Accordion, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function Todo({ todos, completeTodo, removeTodo, toggleModal }) {
  return todos.map((todo, index) => (
    <Accordion key={index}>
      <Card
        className={todo.isComplete ? "todo-row complete px-0" : "todo-row px-0"}
      >
        <div className="col-12">
          <span
            key={todo.id}
            className="d-inline-flex col-10"
            onClick={() => toggleModal(todo.id)}
          >
            {todo.title}
          </span>

          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <AiOutlineCheckCircle
            onClick={() => completeTodo(todo.id)}
            className="delete-icon"
          />
          <CustomToggle eventKey={index} />
        </div>

        <Accordion.Collapse eventKey={index}>
          <Card.Body className="d-inline-flex col-12">
            <ReactMarkdown>{todo.description}</ReactMarkdown>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  ));
}

export default Todo;
