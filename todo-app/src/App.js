import "./App.css";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Modal show={false} />
    </div>
  );
}

export default App;
