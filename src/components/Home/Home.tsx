import React from 'react';
import { PageHeader } from '../Header/PageHeader';
import { Carousel } from '../Carousel/Carousel';
import { GithubWidget } from '../About/GithubWidget';
import { AboutMe } from '../About/AboutMe';
import { ContactForm } from '../Contact/ContactSubComponents/ContactForm';

export const Home: React.FC = () => {
  return (
    <section className="page">
      <PageHeader title="home" />
      <section>
        <h2>Projects</h2>
        <div className="carousel">
          <div className="carouselContainer">
            <Carousel />
          </div>
        </div>
        <div className="spacer"></div>
      </section>
      <section>
        <h2>About me</h2>
        <div className="aboutMeContainer">
          <GithubWidget githubUsername={'GoudekettingRM'} />
          <AboutMe />
        </div>
        <div className="spacer"></div>
      </section>
      <section>
        <h2>Get in touch</h2>
        <ContactForm />
      </section>
      <div className="spacer"></div>
    </section>
  );
};
