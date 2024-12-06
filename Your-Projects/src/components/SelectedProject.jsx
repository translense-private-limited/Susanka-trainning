import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask }) => {
  if (!project) {
    return <p>No project selected.</p>;
  }

  return (
    <div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-red-600"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </header>
      <p className="mb-4 text-stone-400">{project.dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap mb-8">
        {project.description}
      </p>
      <Tasks
        tasks={project.tasks || []}
        onAdd={onAddTask}
        onDelete={onDeleteTask}
      />
    </div>
  );
};

export default SelectedProject;
