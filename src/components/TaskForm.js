import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { nanoid } from "nanoid";

function TaskForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: nanoid(), task }));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-400 p-2 mr-2 w-64"
        placeholder="Enter a task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
