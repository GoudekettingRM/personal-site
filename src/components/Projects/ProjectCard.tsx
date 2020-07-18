import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import titleize from 'titleizejs';
import { ProjectType } from '../../types/project';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './projects.css';
import { UiLink } from '../../ui/UiLink';

interface Props {
  data: ProjectType;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const {
    title,
    shortDescr,
    deployedVersionUrl,
    clientRepoUrl,
    serverRepoUrl,
    thumbNail,
    id,
  } = props.data;

  const history = useHistory();

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
        <Card.Title>{titleize(title)}</Card.Title>
        <Card.Text>{shortDescr}</Card.Text>
        <Link to={`/projects/${id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
        <br />
        <br />
        {deployedVersionUrl && (
          <UiLink label={'< Deployed version />'} url={deployedVersionUrl} />
        )}
        {clientRepoUrl && (
          <UiLink label={'< Examine client code />'} url={clientRepoUrl} />
        )}
        {serverRepoUrl && (
          <UiLink label={'< Examine server code />'} url={serverRepoUrl} />
        )}
      </Card.Body>
    </Card>
  );
};
