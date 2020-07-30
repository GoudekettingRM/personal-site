import React from 'react';
import { RouteComponentProps } from 'react-router';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown';

import { allProjects } from '../../data/projectData';
import { PageHeader } from '../Header/PageHeader';
import { UiLink } from '../../ui/UiLink';
import { repoUrlLabels } from '../../data/projectData';

import './projects.scss';
import titleize from 'titleizejs';

interface Params {
  projectId: string;
}

interface Props extends RouteComponentProps<Params> {}

export const ProjectDetails: React.FC<Props> = ({ match }) => {
  const project = allProjects.find(
    (project) =>
      titleize(project.title) ===
      titleize(match.params.projectId, { isSlug: true }),
  );

  if (!project)
    return (
      <div>
        <PageHeader title="Not Found" />
      </div>
    );

  const {
    title,
    thumbNail,
    longDescr,
    shortDescr,
    technologiesUsed,
    clientRepoUrl,
    deployedVersionUrl,
    serverRepoUrl,
    generalRepoUrl,
  } = project;

  const {
    deployedUrlLabel,
    clientRepoLabel,
    serverRepoLabel,
    generalRepoLabel,
  } = repoUrlLabels;

  return (
    <>
      <PageHeader title={title} />
      <div className="spacerSmall"></div>
      <Accordion className="customCard projectDetailsCard">
        <Card.Img
          className="detailsImage"
          src={thumbNail}
          alt={title}
          title={title}></Card.Img>
        <Card.Body>
          <Card.Text>{shortDescr}</Card.Text>
          <Card.Text className="projectDetailsCard__repoLinks">
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
          </Card.Text>
        </Card.Body>
        <Accordion.Toggle
          as={Button}
          eventKey="0"
          className="toggleProjectButton styledButton">
          More About the Project
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ReactMarkdown source={longDescr} />
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          eventKey="1"
          className="toggleProjectButton styledButton">
          Technologies Used
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {technologiesUsed.map((technology, i) => {
              if (i !== technologiesUsed.length - 1) {
                return <span key={i}>{technology} | </span>;
              } else {
                return <span key={i}>{technology}</span>;
              }
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};
