import React from "react";

const ProjectSideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-600"
        >
          + Add project
        </button>
      </div>
      <ul className="mt-8 space-y-2">
        {projects.map((project) => {
          // Apply the CSS class based on the selected project's ID
          const cssClass =
            project.id === selectedProjectId
              ? "px-4 py-2 bg-stone-800 text-stone-200 rounded-md"
              : "px-4 py-2 bg-stone-800 text-stone-400 rounded-md hover:bg-stone-700";

          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
