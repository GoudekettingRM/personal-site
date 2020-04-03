import React from "react";
import { ProjectCard } from "./ProjectCard";
import { allProjects } from "./projectData";

export const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      {allProjects.map((project, i) => {
        return <ProjectCard key={i} data={project} />;
      })}
    </div>
  );
};
