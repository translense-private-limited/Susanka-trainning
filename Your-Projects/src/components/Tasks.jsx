import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-stone-100 px-4 py-2 rounded-md shadow-sm"
            >
              <span className="text-stone-700">{task.text}</span>
              <button
                className="text-red-500 hover:text-red-700 font-medium"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
