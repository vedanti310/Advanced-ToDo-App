import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <div className="todo-details">
        <h4>{todo.text}</h4>
        {todo.dueDate && <small>Due: {todo.dueDate}</small>}
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
