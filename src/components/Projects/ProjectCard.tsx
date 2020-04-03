import React from "react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/project";
import { History } from "history";
import "./projects.css";

type Props = {
  data: ProjectType;
  history: History;
};

export const ProjectCard: React.FC<Props> = props => {
  const {
    history,
    data: { title, shortDescr, url, repoUrl, thumbNail, id }
  } = props;

  const handleClick = (): void => {
    history.push(`/projects/${id}`);
  };

  return (
    <div title={shortDescr} className="projectCard">
      <h2 className="subtitle">{title}</h2>
      <img
        onClick={handleClick}
        src={thumbNail}
        alt={title}
        className="projectThumbnail"
      />
      <p className="projectShort">{shortDescr}</p>
      <Link className="cardLink" to={`/projects/${id}`}>
        {"< Read more />"}
      </Link>
      <a
        className="cardLink"
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {"< Check the deployed version />"}
      </a>
      <a
        className="cardLink"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer">
        {"< Look at the code />"}
      </a>
    </div>
  );
};
