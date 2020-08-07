import { ProjectType } from '../types/project';
import HomeIcon from '../icons/home.svg';

export const repoUrlLabels: { [index: string]: string } = {
  deployedUrlLabel: '< Deployed version />',
  clientRepoLabel: '< Examine client code />',
  serverRepoLabel: '< Examine server code />',
  generalRepoLabel: '< Examine code />',
};

export const allProjects: ProjectType[] = [
  {
    id: 1,
    title: 'Should I Go Out',
    deployedVersionUrl: 'http://www.should-i-go-out.com/',
    clientRepoUrl: 'https://github.com/GoudekettingRM/should-i-go-out-client',
    shortDescr:
      'A web application to check if you should go outside during the corona crisis made using TypeScript and React/Redux.',
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
      'Continuous Integration',
    ],
  },
  {
    id: 2,
    title: 'Titleize JS',
    deployedVersionUrl: 'https://www.npmjs.com/package/titleizejs',
    generalRepoUrl: 'https://github.com/GoudekettingRM/titleize',
    shortDescr: 'An NPM package that transforms strings into titles.',
    longDescr:
      "An NPM package that converts the input strings to strings that represent titles. It's also being used on this website! There are a few settings to make sure that it can deal with many different input strings. For example, `hello world!` will be titleized to: `Hello World`. If the following setting is passed `{ ignoreSymbols: '!' }`, titleize will convert this to `Hello World!`, preserving the exclamation point.",
    thumbNail:
      'https://res.cloudinary.com/robin-random-files/image/upload/v1596054291/abf563ksxyolxix2r506_c2i2xv.webp',
    technologiesUsed: [
      'TypeScript',
      'JavaScript',
      'Node JS',
      'NPM',
      'Mocha',
      'Chai',
      'Continuous Integration',
    ],
  },
  {
    id: 3,
    title: 'Portfolio website',
    shortDescr: 'This website to showcase my work.',
    deployedVersionUrl: 'http://goudeketting.netlify.app/',
    clientRepoUrl: 'https://github.com/GoudekettingRM/personal-site',
    longDescr:
      'I made my own portfolio website to provide a point of contact for interested parties and to showcase projects I\ve worked on.',
    thumbNail: HomeIcon,
    technologiesUsed: [
      'TypeScript',
      'JavaScript',
      'React',
      'Sass',
      'Bootstrap',
      'FramerMotion',
      'EmailJS',
      'ReCaptcha',
    ],
  },
];
