import React from 'react';
import Github from '../../icons/github.svg';
import LinkedIn from '../../icons/linkedin.svg';

export const Footer: React.FC = () => {
  return (
    <>
      <div className="spacer"></div>
      <footer>
        <hr />
        <p>
          <a
            className="externalLink"
            href="https://github.com/GoudekettingRM"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="icon"
              src={Github}
              alt="Link to Robin Goudeketting's Github Profile"
            />
          </a>
          <a
            className="externalLink"
            href="https://www.linkedin.com/in/robinmgoudeketting/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="icon"
              src={LinkedIn}
              alt="Link to Robin Goudeketting's LinkedIn Profile"
            />
          </a>
          <a
            className="externalLink"
            href="https://dev.to/goudekettingrm"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="icon"
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Link to Robin Goudeketting's DEV Profile"
            />
          </a>
        </p>
        <h6>© 2020. All rights reserved.</h6>
      </footer>
    </>
  );
};
