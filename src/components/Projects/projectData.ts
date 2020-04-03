import { ProjectType } from "../../types/project";

export const allProjects: ProjectType[] = [
  {
    id: 1,
    title: "Should I Go Out?",
    url: "http://www.should-i-go-out.com/",
    repoUrl: "https://github.com/GoudekettingRM/should-i-go-out-client",
    shortDescr:
      "An web application to check if you should go outside during the corona crisis made using TypeScript and React/Redux",
    longDescr:
      "A Front-end web application to check if it is wise to go outside during the corona crisis. The app was made using React/Redux and TypeScript. The goal of this app was to practice working with TypeScript and to inform people. Thanks to the help of some friends, I managed to get many translations to add some I18n to it as well (using the React-intl package). Futhermore, I added the option to share the website using the React-share package.",
    thumbNail:
      "https://assets.website-files.com/5d9ba0eb5f6edb77992a99d0/5e6a55e065f9f1dc64398873_iconfinder_pandemic-disease-virus-infection-coronavirus-incident--covid19_5879326.png"
  }
];