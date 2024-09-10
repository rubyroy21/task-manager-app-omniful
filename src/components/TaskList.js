import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-disc pl-5">
      {tasks.length === 0 ? (
        <li>No tasks available</li>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className="mb-2 flex justify-between border border-[#ececec] p-3 items-center rounded-lg"
          >
            <span>{task.task}</span>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
