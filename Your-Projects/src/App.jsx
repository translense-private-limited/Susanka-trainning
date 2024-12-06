import React, { useState } from "react";
import "./App.css";
import "./index.css";
import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedId: undefined,
    projects: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedId) {
          const updatedTasks = project.tasks
            ? [...project.tasks, { id: Date.now(), text }]
            : [{ id: Date.now(), text }];
          return { ...project, tasks: updatedTasks };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedId) {
          const updatedTasks = project.tasks.filter(
            (task) => task.id !== taskId
          );
          return { ...project, tasks: updatedTasks };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedId: id,
    }));
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedId: null,
    }));
  };

  const handleSaveProject = (newProject) => {
    setProjectState((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        { id: Date.now(), tasks: [], ...newProject },
      ],
      selectedId: undefined,
    }));
  };

  const handleCancel = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedId: undefined,
    }));
  };

  const handleDelete = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((project) => project.id !== id),
      selectedId: undefined,
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedId
  );

  let content;
  if (projectState.selectedId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleSaveProject} />;
  } else if (projectState.selectedId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={() => handleDelete(selectedProject.id)}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="h-screen flex">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedId}
      />
      <div className="flex-1 ml-0 lg:ml-72">{content}</div>
    </main>
  );
}

export default App;
