import React from "react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/project";

type Props = {
  data: ProjectType;
};

export const ProjectCard: React.FC<Props> = props => {
  const { title, shortDescr, url, repoUrl, thumbNail, id } = props.data;
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/projects/${id}`}>Read more</Link>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Check it out
      </a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        Look at the code
      </a>
    </div>
  );
};
