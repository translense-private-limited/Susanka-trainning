import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddClick = () => {
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        className="border border-stone-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-stone-400"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
