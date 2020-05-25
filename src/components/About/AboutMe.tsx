import React from 'react';
import { UiLink } from '../../ui/UiLink';
import './about.css';

interface Props {
  withTitle?: boolean;
}

export const AboutMe: React.FC<Props> = ({ withTitle }) => {
  return (
    <div className="aboutText">
      {withTitle && <h2 className="subtitle">About me</h2>}
      {!withTitle && <h5>Who am I</h5>}
      <p>
        There are three things that drive me in life: learning, improving life,
        and helping others. Learning increases my thirst for knowledge in an{' '}
        <em>infinite loop</em>. I <em>Express</em> myself with my enthusiasm and
        am passionate about adding value. At the same time, I get thoroughly
        fulfilled by coding. Seeing others <em>React</em> to my apps boosts my
        creativity and helps me thrive.
        <br /> <br /> I am a dedicated person. I am, however, convinced that
        life is serious enough as it is. Therefore, my optimal environment, both
        personal and professional, is a place where people work hard, but also{' '}
        <em>REST</em>, laugh and enjoy life.
      </p>
      <UiLink
        label={`< Dutch CV />`}
        url={
          'https://res.cloudinary.com/robin-random-files/image/upload/v1588062626/CV_Nederlands_c5bfox.pdf'
        }
        download
        downloadName={'cv-robin-goudeketting-nl.pdf'}
      />
      <UiLink
        label={`< English CV />`}
        url={
          'https://res.cloudinary.com/robin-random-files/image/upload/v1588062596/CV_English_t8v7ir.pdf'
        }
        download
        downloadName={'cv-robin-goudeketting-en.pdf'}
      />
    </div>
  );
};
