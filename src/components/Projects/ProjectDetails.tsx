import React from 'react';
import { RouteComponentProps } from 'react-router';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { allProjects } from '../../data/projectData';
import { PageHeader } from '../Header/PageHeader';
import { UiLink } from '../../ui/UiLink';

import './projects.css';

interface Params {
  projectId: string;
}

interface Props extends RouteComponentProps<Params> {}

export const ProjectDetails: React.FC<Props> = ({ match }) => {
  const project = allProjects.find(
    (project) => project.id === parseInt(match.params.projectId),
  );

  if (!project)
    return (
      <div>
        <PageHeader title="404 - Not Found" />
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
  } = project;

  return (
    <div>
      <PageHeader title={title} />
      <div className="projectDetails">
        <Accordion className="informationMargin">
          <Card>
            <Card.Img
              className="detailsImage"
              src={thumbNail}
              alt={title}
              title={title}></Card.Img>
            <Card.Body>{shortDescr}</Card.Body>
            <Card.Text>
              {deployedVersionUrl && (
                <UiLink
                  label={'< Deployed version />'}
                  url={deployedVersionUrl}
                />
              )}
              {clientRepoUrl && (
                <UiLink
                  label={'< Examine client code />'}
                  url={clientRepoUrl}
                />
              )}
              {serverRepoUrl && (
                <UiLink
                  label={'< Examine server code />'}
                  url={serverRepoUrl}
                />
              )}
            </Card.Text>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0">
                More About the Project
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{longDescr}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="1">
                Technologies Used
              </Accordion.Toggle>
            </Card.Header>
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
          </Card>
        </Accordion>
      </div>
    </div>
  );
};
