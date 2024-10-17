"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <main>
      <h1>t</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleInputChange}
        className="text-blue-500"
      />
      <button>Add Task</button>
    </main>
  );
}
