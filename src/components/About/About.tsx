import React from 'react';

import { PageHeader } from '../Header/PageHeader';
import { hobbies, educations } from '../../data/aboutData';
import { AboutDataCard } from './AboutDataCard';
import { GithubWidget } from './GithubWidget';
import { AboutMe } from './AboutMe';

import './about.css';

export const About: React.FC = () => {
  return (
    <div>
      <PageHeader title="About" />
      <div className="aboutMeContainer">
        <GithubWidget githubUsername={'GoudekettingRM'} />
        <AboutMe />
      </div>
      <h2 className="subtitle">Education</h2>
      <div className="aboutCardContainer">
        {educations.map((education, i) => (
          <AboutDataCard key={i} data={education} />
        ))}
      </div>
      <h2 className="subtitle padded-top">Hobbies</h2>
      <div className="aboutCardContainer">
        {hobbies.map((hobby, i) => (
          <AboutDataCard key={i} data={hobby} />
        ))}
      </div>
    </div>
  );
};
