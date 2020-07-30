import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Loading } from '../FramerMotionIcons/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Repo from '../../icons/repo.svg';
import Gist from '../../icons/gist.svg';
import GitHubLogo from '../../icons/github.svg';

interface Props {
  githubUsername: string;
}

interface GithubData {
  imgUrl: string;
  url: string;
  publicRepos: number;
  publicGists: number;
}

export const GithubWidget: React.FC<Props> = ({ githubUsername }) => {
  const [githubData, setGithubData] = useState<GithubData>();

  useEffect(() => {
    const getGithubData = async (): Promise<GithubData | void> => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`,
        );
        const parsedResponse = await response.json();
        if (Object.keys(parsedResponse).length) {
          return {
            imgUrl: parsedResponse.avatar_url,
            url: parsedResponse.html_url,
            publicRepos: parsedResponse.public_repos,
            publicGists: parsedResponse.public_gists,
          };
        }
      } catch (error) {
        console.error('Error while fetching github data for',githubUsername ,error);
      }
    };

    const triggerFetch = async () => {
      const data = await getGithubData();
      if (data) {
        setGithubData(data);
      } else console.error(`No data github data found for ${githubUsername}`);
    };

    if (!githubData) {
      triggerFetch();
    } else return;
  }, [githubData, githubUsername]);

  if (githubData) {
    return (
      <div className="githubWidget customCard">
        <LazyLoadImage
          className="githubWidgetImage"
          src={githubData.imgUrl}
          alt="Robin Goudeketting"
        />
        <div className="githubWidgetData">
          <div className="githubWidgetDataSet">
            <img className="icon" src={Repo} alt="" />
            <div>
              <span className="githubWidgetCountData">
                {githubData.publicRepos}
              </span>
              <span className="githubWidgetIconDescription">repos</span>
            </div>
          </div>
          <div className="verticalLine"></div>
          <div className="githubWidgetDataSet">
            <div>
              <span className="githubWidgetCountData">
                {githubData.publicGists}
              </span>
              <span className="githubWidgetIconDescription">gists</span>
            </div>
            <img className="icon" src={Gist} alt="" />
          </div>
        </div>
        <a href={githubData.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-secondary" className="githubWidgetButton">
            <img src={GitHubLogo} alt="Github Logo" /> {`@${githubUsername}`}
          </Button>
        </a>
      </div>
    );
  } else {
    return <Loading />;
  }
};
