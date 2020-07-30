import React from 'react';
import { ReactComponent as Github } from '../../icons/github.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as DevTo } from '../../icons/dev-badge.svg';
import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <hr />
        <p>
          <a
            aria-label="Link to Robin's Github"
            className="externalLink"
            href="https://github.com/GoudekettingRM"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="icon" />
          </a>
          <a
            aria-label="Link to Robin's LinkedIn"
            className="externalLink"
            href="https://www.linkedin.com/in/robinmgoudeketting/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn className="icon" />
          </a>
          <a
            aria-label="Link to Robin's Twitter"
            className="externalLink"
            href="https://twitter.com/RMGoudeketting"
            target="_blank"
            rel="noopener noreferrer">
            <Twitter className="icon" />
          </a>
          <a
            aria-label="Link to Robin's Dev Profile"
            className="externalLink"
            href="https://dev.to/goudekettingrm"
            target="_blank"
            rel="noopener noreferrer">
            <DevTo className="icon" />
          </a>
        </p>
        <p className="copyright">© 2020. All rights reserved.</p>
      </footer>
    </>
  );
};
