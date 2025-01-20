import React from "react";
import TodoItem from "./ToDoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-state">No tasks yet! 🎉</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
