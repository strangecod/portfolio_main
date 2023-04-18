import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: mobile,
  },
  {
    title: "Augmented Reality",
    icon: backend,
  },
  
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Augmented",
    icon: backend,
  },
 
];

const experiences = [
  {
    title: "Front-end developer",
    company_name: "Techmihirnaik.in",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - june 2022",
    points: [
      "Developing and maintaining web applications using Html,css,javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile web developer",
    company_name: "Cisco",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Hello,My Name is Anany Tewari.I am from Lucknow, currently pursusing BTech from Kiet Group of Institutions.I did my schooling from CMS Kanpur road. ",
  
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "SKILLS-Web Developemnt.AR/VR developer . Languages known - html , css , javascript,Node.js, Expressjs, mongoDB,C#.",
   
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Future goal is to become a software developer.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "#3d Animals",
    description:
      "AR based learning which helps to enhance the learning of the children by learnign through the 3d model with voice assistant.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Vuforia",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradiant",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/strangecod/hackCBS",
  },
  {
    name: "AR-Shopping",
    description:
      "Web Application for making a platform form virtual try on shopping which will help the people to purchase the things easily.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/strangecod/Ar-Shopping",
  },
  {
    name: "Social-Media-Monetoring System",
    description:
      "A Machine learning model to detect the fake accounts and fake comments on the social media platforms like instgram,linkdin.",
    tags: [
      {
        name: "selenium",
        color: "blue-text-gradient",
      },
      {
        name: "beautifulsoup",
        color: "green-text-gradient",
      },
      {
        name: "dataset",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/strangecod/Social-media",
  },
  {
    name: "Resume",
    description:
      "Accses the resume by clicking the github icon",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "JAVA",
        color: "green-text-gradient",
      },
      {
        name: "DSA",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/strangecod/Resume",
  },
];

export { services, technologies, experiences, testimonials, projects };
