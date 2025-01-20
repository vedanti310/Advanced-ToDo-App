import React, { useState } from "react";

function AddTodoModal({ setIsModalOpen, addTodo }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    setError("");

    if (!taskName.trim() || !dueDate.trim()) {
      setError("Task name and due date are mandatory!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: taskName,
      dueDate,
      completed: false,
    };

    addTodo(newTodo);
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Cancel Icon */}
        <span
          className="close-icon"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </span>

        <h3>Add New Task</h3>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="add-btn" onClick={handleAddTodo}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
