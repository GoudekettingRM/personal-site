import React from 'react';
import { PageHeader } from '../Header/PageHeader';
import { Carousel } from '../Carousel/Carousel';
import { GithubWidget } from '../About/GithubWidget';
import { AboutMe } from '../About/AboutMe';
import { ContactForm } from '../Contact/ContactSubComponents/ContactForm';
import titleize from 'titleizejs';

import './Home.scss';

export const Home: React.FC = () => {
  return (
    <>
      <PageHeader title="home" />
      <section className="page">
        <section className="sectionContainer">
          <h2 className="sectionTitle">{titleize('projects')}</h2>
          <div className="carousel">
            <div className="carouselContainer">
              <Carousel />
            </div>
          </div>
        </section>
        <div className="backgroundImageSpacer"></div>
        <section className="sectionContainer">
          <h2 className="sectionTitle">{titleize('about me')}</h2>
          <div className="aboutMeContainer">
            <GithubWidget githubUsername={'GoudekettingRM'} />
            <AboutMe />
          </div>
        </section>
        <div className="backgroundImageSpacer"></div>
        <section className="sectionContainer">
          <h2 className="sectionTitle">Get in touch</h2>
          <ContactForm />
        </section>
      </section>
      <div className="backgroundImageSpacer"></div>
    </>
  );
};
