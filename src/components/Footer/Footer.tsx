import React from 'react';
import { ReactComponent as Github } from '../../icons/github.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg';
import { ReactComponent as DevTo } from '../../icons/dev-badge.svg';
import './footer.scss';

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
            <Github className="icon" />
          </a>
          <a
            className="externalLink"
            href="https://www.linkedin.com/in/robinmgoudeketting/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn className="icon" />
          </a>
          <a
            className="externalLink"
            href="https://dev.to/goudekettingrm"
            target="_blank"
            rel="noopener noreferrer">
            <DevTo className="icon" />
          </a>
        </p>
        <h6 className="copyright">© 2020. All rights reserved.</h6>
      </footer>
    </>
  );
};
