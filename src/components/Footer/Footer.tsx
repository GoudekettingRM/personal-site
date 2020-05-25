import React from 'react';
import Github from '../../icons/github.svg';
import LinkedIn from '../../icons/linkedin.svg';

export const Footer: React.FC = () => {
  return (
    <footer>
      <hr />
      <p>
        <a
          className="externalLink"
          href="https://github.com/GoudekettingRM"
          target="_blank"
          rel="noopener noreferrer">
          <img className="icon" src={Github} alt="Github logo" />
        </a>
        <a
          className="externalLink"
          href="https://www.linkedin.com/in/robinmgoudeketting/"
          target="_blank"
          rel="noopener noreferrer">
          <img className="icon" src={LinkedIn} alt="LinkedIn logo" />
        </a>
      </p>
      <h6>© 2020. All rights reserved. Robin Goudeketting.</h6>
    </footer>
  );
};
