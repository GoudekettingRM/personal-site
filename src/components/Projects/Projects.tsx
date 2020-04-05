import React from "react";
import { ProjectCard } from "./ProjectCard";
import { allProjects } from "./data/projectData";
import { History } from "history";
import { PageHeader } from "../Header/PageHeader";

type Props = {
  history: History;
};

export const Projects: React.FC<Props> = (props) => {
  const { history } = props;

  return (
    <div>
      <PageHeader title="Projects" />
      <div className="projectsContainer">
        {allProjects.map((project, i) => {
          return <ProjectCard key={i} data={project} history={history} />;
        })}
      </div>
    </div>
  );
};
