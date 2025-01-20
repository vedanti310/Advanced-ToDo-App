import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import AddTodoModal from "./components/AddTodoModal";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="app">
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        + Add Task
      </button>
      {isModalOpen && (
        <AddTodoModal setIsModalOpen={setIsModalOpen} addTodo={addTodo} />
      )}
    </div>
  );
}

export default App;
