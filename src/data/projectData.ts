import { ProjectType } from '../types/project';

export const repoUrlLabels: { [index: string]: string } = {
  deployedUrlLabel: '< Deployed version />',
  clientRepoLabel: '< Examine client code />',
  serverRepoLabel: '< Examine server code />',
  generalRepoLabel: '< Examine code />',
};

export const allProjects: ProjectType[] = [
  {
    id: 1,
    title: 'Should I Go Out?',
    deployedVersionUrl: 'http://www.should-i-go-out.com/',
    clientRepoUrl: 'https://github.com/GoudekettingRM/should-i-go-out-client',
    shortDescr:
      'ONE -- A web application to check if you should go outside during the corona crisis made using TypeScript and React/Redux.',
    longDescr:
      'A Front-end web application to check if it is wise to go outside during the corona crisis. The app was made using React/Redux and TypeScript. The goal of this app was to practice working with TypeScript and to inform people. Thanks to the help of some friends, I managed to get many translations to add some I18n to it as well (using the React-intl package). Futhermore, I added the option to share the website using the React-share package.',
    thumbNail:
      'https://res.cloudinary.com/robin-random-files/image/upload/v1586039519/5e6a55e065f9f1dc64398873_iconfinder_pandemic-disease-virus-infection-coronavirus-incident--covid19_5879326_oykult.png',
    technologiesUsed: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'I18n',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 2,
    title: 'Should I Go Out?',
    deployedVersionUrl: 'http://www.should-i-go-out.com/',
    clientRepoUrl: 'https://github.com/GoudekettingRM/should-i-go-out-client',
    serverRepoUrl: 'https://google.com/',
    shortDescr:
      'TWO -- A web application to check if you should go outside during the corona crisis made using TypeScript and React/Redux.',
    longDescr:
      'A Front-end web application to check if it is wise to go outside during the corona crisis. The app was made using React/Redux and TypeScript. The goal of this app was to practice working with TypeScript and to inform people. Thanks to the help of some friends, I managed to get many translations to add some I18n to it as well (using the React-intl package). Futhermore, I added the option to share the website using the React-share package.',
    thumbNail:
      'https://res.cloudinary.com/robin-random-files/image/upload/v1586039519/5e6a55e065f9f1dc64398873_iconfinder_pandemic-disease-virus-infection-coronavirus-incident--covid19_5879326_oykult.png',
    technologiesUsed: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'I18n',
      'HTML',
      'CSS',
    ],
  },
];
