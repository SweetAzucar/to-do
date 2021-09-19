import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CustomToggle from "./CustomToggle";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Accordion, Card } from "react-bootstrap";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Accordion key={index}>
      <Card
        className={todo.isComplete ? "todo-row complete px-0" : "todo-row px-0"}
      >
        <div className="col-12">
          <span
            key={todo.id}
            className="d-inline-flex col-10"
            onClick={() => updateTodo(todo.id)}
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
            {todo.description}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  ));
}

export default Todo;
