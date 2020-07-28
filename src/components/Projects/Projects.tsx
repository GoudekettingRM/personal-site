import React from 'react';
import { ProjectCard } from './ProjectCard';
import { allProjects } from '../../data/projectData';
import { PageHeader } from '../Header/PageHeader';

export const Projects: React.FC = () => {
  return (
    <div>
      <PageHeader title="Projects" />
      <div className="spacer"></div>
      <div className="projectsContainer">
        {allProjects.map((project, i) => {
          return <ProjectCard key={i} data={project} />;
        })}
      </div>
    </div>
  );
};
