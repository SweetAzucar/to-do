import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import useStore from "../store/store";

function TodoList() {
  const { addTodo, removeTodo, completeTodo, toggleModal, todos } = useStore(
    (state) => state
  );

  return (
    <div>
      <h1 className="mt-2">Todo list</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default TodoList;
