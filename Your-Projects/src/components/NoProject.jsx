import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center mx-auto max-w-lg">
      <img
        src={noProjectImage}
        alt="No project available"
        className="w-24 h-24 object-contain mx-auto mb-6"
      />

      <h2 className="text-2xl font-bold text-stone-600 mb-4">
        No Project Selected
      </h2>

      <p className="text-stone-500 mb-6">
        You don't have any projects yet. Select one or get started by creating a
        new project!
      </p>

      <Button
        onClick={onStartAddProject}
        className="px-6 py-3 rounded-lg bg-stone-800 text-white hover:bg-stone-700 transition-all"
      >
        Create Project
      </Button>
    </div>
  );
};

export default NoProject;
