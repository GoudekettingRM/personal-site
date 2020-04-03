import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectCard id={1} />
    </div>
  );
};
