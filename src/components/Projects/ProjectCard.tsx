import React from "react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/project";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { History } from "history";
import "./projects.css";

type Props = {
  data: ProjectType;
  history: History;
};

export const ProjectCard: React.FC<Props> = (props) => {
  const {
    history,
    data: {
      title,
      shortDescr,
      deployedVersionUrl,
      clientRepoUrl,
      serverRepoUrl,
      thumbNail,
      id,
    },
  } = props;

  const handleClick = (): void => {
    history.push(`/projects/${id}`);
  };

  return (
    <Card className="projectCard" title={shortDescr}>
      <Card.Img
        variant="top"
        onClick={handleClick}
        src={thumbNail}
        alt={title}
        className="projectThumbnail"
      />
      <Card.Body style={{ padding: 0 }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{shortDescr}</Card.Text>
        <Link to={`/projects/${id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
        <br />
        <br />
        {deployedVersionUrl && (
          <a
            className="cardLink"
            href={deployedVersionUrl}
            target="_blank"
            rel="noopener noreferrer">
            {"< Deployed version />"}
            <span className="underline-link"></span>
          </a>
        )}
        {clientRepoUrl && (
          <a
            className="cardLink"
            href={clientRepoUrl}
            target="_blank"
            rel="noopener noreferrer">
            {"< Examine client code />"}
            <span className="underline-link"></span>
          </a>
        )}
        {serverRepoUrl && (
          <a
            className="cardLink"
            href={serverRepoUrl}
            target="_blank"
            rel="noopener noreferrer">
            {"< Examine server code />"}
            <span className="underline-link"></span>
          </a>
        )}
      </Card.Body>
    </Card>
  );
};
