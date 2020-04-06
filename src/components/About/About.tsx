import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageHeader } from "../Header/PageHeader";
import { hobbies, educations } from "./data/aboutData";
import { AboutDataCard } from "./AboutDataCard";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Repo from "../../icons/repo.svg";
import Gist from "../../icons/gist.svg";
import GitHubLogo from "../../icons/github.svg";
import "./about.css";

interface GithubData {
  imgUrl: string;
  url: string;
  publicRepos: number;
  publicGists: number;
}
const getGithubData = async (): Promise<GithubData | void> => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/GoudekettingRM"
    );
    if (Object.keys(response.data).length) {
      return {
        imgUrl: response.data.avatar_url,
        url: response.data.html_url,
        publicRepos: response.data.public_repos,
        publicGists: response.data.public_gists,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const About: React.FC = () => {
  const [githubData, setGithubData] = useState<GithubData>();
  useEffect(() => {
    getGithubData().then((data) => {
      if (data) {
        setGithubData(data);
      } else console.log("No data");
    });
  }, []);

  return (
    <div>
      <PageHeader title="About" />
      <div className="aboutMeContainer">
        {githubData && (
          <div className="githubWidget">
            <Image
              className="githubWidgetImage"
              roundedCircle
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
            <a href={githubData.url}>
              <Button
                variant="outline-secondary"
                className="githubWidgetButton">
                <img src={GitHubLogo} alt="Github Logo" /> @GoudekettingRM
              </Button>
            </a>
          </div>
        )}

        <div className="aboutText">
          <h2 className="subtitle">About me</h2>
          <p>
            There are three things that drive me in life: learning, improving
            life, and helping others. Learning increases my thirst for knowledge
            in an <em>infinite loop</em>. I <em>Express</em> myself with my
            enthusiasm and am passionate about adding value. At the same time, I
            get thoroughly fulfilled by coding. Seeing others <em>React</em> to
            my apps boosts my creativity and helps me thrive.
            <br /> <br /> I am a dedicated person. I am, however, convinced that
            life is serious enough as it is. Therefore, my optimal environment,
            both personal and professional, is a place where people work hard,
            but also <em>REST</em>, laugh and enjoy life.
          </p>
        </div>
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
