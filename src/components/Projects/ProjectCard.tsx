import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import titleize from 'titleizejs';
import slugify from 'slugify';
import { ProjectType } from '../../types/project';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './projects.scss';
import { UiLink } from '../../ui/UiLink';
import { repoUrlLabels } from '../../data/projectData';

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
    generalRepoUrl,
    thumbNail,
    id,
  } = props.data;

  const {
    deployedUrlLabel,
    clientRepoLabel,
    serverRepoLabel,
    generalRepoLabel,
  } = repoUrlLabels;

  const history = useHistory();

  const handleClick = (): void => {
    history.push(`/projects/${id}`);
  };

  return (
    <Card className="projectCard customCard" title={shortDescr}>
      <div style={{ height: '15rem' }}>
        <Card.Img
          variant="top"
          onClick={handleClick}
          src={thumbNail}
          alt={title}
          className="projectThumbnail"
        />
      </div>
      <Card.Body style={{ padding: 0 }}>
        <Card.Title>{titleize(title)}</Card.Title>
        <Card.Text style={{ minHeight: '5rem' }}>{shortDescr}</Card.Text>
        <Link to={`/projects/${slugify(title.toLowerCase())}`}>
          <Button variant="primary" className="styledButton">
            More about {title}
          </Button>
        </Link>
        <br />
        <br />
        {deployedVersionUrl && (
          <UiLink label={deployedUrlLabel} url={deployedVersionUrl} />
        )}
        {clientRepoUrl && (
          <UiLink label={clientRepoLabel} url={clientRepoUrl} />
        )}
        {serverRepoUrl && (
          <UiLink label={serverRepoLabel} url={serverRepoUrl} />
        )}
        {generalRepoUrl && (
          <UiLink label={generalRepoLabel} url={generalRepoUrl} />
        )}
      </Card.Body>
    </Card>
  );
};
