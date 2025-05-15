import {
  FaGithub,
  FaLinkedin,
  FaCloudDownloadAlt,
  FaEnvelope,
} from "react-icons/fa";

export const Links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/ciciliani",
    text: "linkedin",
    icon: FaLinkedin,
  },
  {
    id: 2,
    link: "https://github.com/danielciciliani",
    text: "github",
    icon: FaGithub,
  },
  {
    id: 3,
    link: "./CV_DanielCiciliani_frontendReactDeveloper-EN.pdf",
    text: "CV",
    icon: FaCloudDownloadAlt,
    download: "CvDanielCiciliani",
  },
];

export const mailTo =
  "mailto:danielciciliani.dev@gmail.com?&subject=I've just seen your website&body=Hey Dani!";

export const ContactLink = [
  { id: 1, link: mailTo, text: "Contact", icon: FaEnvelope },
];
