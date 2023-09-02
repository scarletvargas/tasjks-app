import React, { useState } from "react";
import "../css/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="task-input"
        placeholder="Write a Task"
        name="text"
        onChange={manejarCambio}
      />
      <button className="task-button">Add Task</button>
    </form>
  );
}

export default TaskForm;
