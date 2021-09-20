import create from "zustand";
import { persist } from "zustand/middleware";

const todo = { id: -1, title: "", description: "", isComplete: false };

const useStore = create(
  persist((set) => ({
    todos: [],
    showModal: false,
    selectedTodo: todo,
    toggleModal: (id) =>
      set((state) => ({
        showModal: !state.showModal,
        selectedTodo: state.todos.find((el) => id === el.id) || todo,
      })),
    addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
    updateTodo: (id, newValue) =>
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title: newValue.title,
              description: newValue.description,
            };
          }
          return todo;
        }),
      })),
    completeTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        }),
      })),
    removeTodo: (id) =>
      set((state) => ({
        todos: [...state.todos].filter((todo) => todo.id !== id),
      })),
  }))
);

export default useStore;
