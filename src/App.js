import React, { lazy, Suspense } from "react";
import TaskForm from "./components/TaskForm";

const TaskList = lazy(() => import("./components/TaskList"));

function App() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
}

export default App;
