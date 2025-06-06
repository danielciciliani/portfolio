import {
  ReactLogo,
  TailwindCSS,
  ReactRouter,
  MySQL,
  Php,
  Sass,
  Jest,
  HTML5,
  JavaScript,
  Docker,
  Motion,
  Vite,
  Vitest,
} from "./TechIcons"

import {
  FaGithub,
  FaExternalLinkSquareAlt
} from "react-icons/fa";


const buttonIcons = {
  code: <FaGithub size={20}></FaGithub>,
  preview: <FaExternalLinkSquareAlt size={20}></FaExternalLinkSquareAlt>
}

const tech = {
  react: {
    name: "React",
    icon: <ReactLogo></ReactLogo>,
  },
  reactRouter: {
    name: "React Router",
    icon: <ReactRouter></ReactRouter>,
  },
  tailwind: {
    name: "Tailwind",
    icon: <TailwindCSS></TailwindCSS>,
  },
  sass: {
    name: "Sass",
    icon: <Sass></Sass>,
  },
  php: {
    name: "PHP",
    icon: <Php></Php>,
  },
  docker: {
    name: "Docker",
    icon: <Docker></Docker>,
  },
  mysql: {
    name: "MySQL",
    icon: <MySQL></MySQL>,
  },
  jest: {
    name: "Jest",
    icon: <Jest></Jest>,
  },
  motion: {
    name: "Motion",
    icon: <Motion></Motion>,
  },
  javascript: {
    name: "Javascript",
    icon: <JavaScript></JavaScript>,
  },
  html: {
    name: "HTML",
    icon: <HTML5></HTML5>,
  },
  vitest: {
    name: "Vitest",
    icon: <Vitest></Vitest>,
  },
  vite: {
    name: "Vite",
    icon: <Vite></Vite>,
  },
};

export const ProjectsData = [

  {
    id: 1,
    name: "MBST Mobile Store",
    tech: [tech.react, tech.tailwind, tech.vite, tech.reactRouter, tech.jest],
    details: `Single Page Application (SPA), created following the requirements of a challenge: fetch data from API, filter, context, persistant data.`,
    buttons: [
      {
        icon: buttonIcons.code,
        name: "Code",
        link: "https://github.com/danielciciliani/zara-challenge-dc",
      },
      { icon: buttonIcons.preview, name: "Preview", link: "https://zara-mbst-dc.vercel.app" },
    ],
    image: "projects/mbst.webp",
    visible: true,
  },
  {
    id: 2,
    name: "Personal Website",
    tech: [tech.react, tech.tailwind, tech.motion, tech.vite, tech.vitest],
    details: `Personal portfolio developed using the most modern technologies.`,
    buttons: [
      { icon: buttonIcons.code, name: "Code", link: "https://github.com/danielciciliani/portfolio" },
    ],
    image: "projects/dcp_dark.webp",
    visible: true,
  },
  {
    id: 3,
    name: "Cinema Production",
    tech: [tech.javascript, tech.motion],
    details: `Corporate website for a cinema production company.`,
    buttons: [{ icon: buttonIcons.preview, name: "Preview", link: "https://www.yoromedia.com" }],
    image: "projects/yoro.webp",
    visible: true,
  },
    {
    id: 4,
    name: "Weather App",
    tech: [tech.react, tech.tailwind, tech.motion, tech.vite],
    details: `Multi language Single Page Application (SPA) MVP, made following the requirements of a challenge.`,
    buttons: [{
        icon: buttonIcons.code,
        name: "Code",
        link: "https://github.com/danielciciliani/weatherAppIsEazy",
      },
      { icon: buttonIcons.preview, name: "Preview", link: "https://weather-app-dc.vercel.app/" }
    ],
    image: "projects/wa.webp",
    visible: true,
  },
  {
    id: 5,
    name: "B2B E-commerce",
    tech: [tech.react, tech.javascript, tech.sass, tech.php, tech.docker],
    details: `E-commerce with more than 60k products, and 10k clients.`,
    buttons: [{ icon: buttonIcons.preview, name: "Preview", link: "https://ixia.es/" }],
    image: "projects/ix.webp",
    visible: true,
  },
  {
    id: 6,
    name: "Coaching",
    tech: [tech.javascript, tech.html, tech.sass, tech.php],
    details: `Corporate website with integrated appointment scheduling.`,
    buttons: [{ icon: buttonIcons.preview, name: "Preview", link: "https://pleasecomein.co.uk" }],
    image: "projects/pci.webp",
    visible: true,
  },
];
