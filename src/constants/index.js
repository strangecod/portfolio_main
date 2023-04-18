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
  {
    name: "Augmented",
    icon: redux,
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
      "INTRODUCTION -Hello,My Name is Anany Tewari.I am from Lucknow, currently pursusing BTech from Kiet Group of Institutions.I did my schooling from CMS Kanpur road. My goal is to get a job in a reputed company and to achieve a good position where I can build my career and help the organization too. My hobbies are playing football. ",
  
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "SKILLS - Web Developemnt(node.js, Express.js,mongoDB). AR/VR developer (Unity,C#,Vuforia,Webgl, Ar Core).  Experience -Frontend intern techmihirnaik.in company , Summer Internship on Web and Mobile Application Development . Management head in Vpaksh(college club). " ,
   
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "ACHIEVEMENTS-  2⭐codechef (Max:1416) Solved-200+ questions on leetcode . Finalist in rakuten hackthon . 6th runner-up in hackathon . Winner in multiple skit performances(galgotias , prastuti). Participated in multiple hackthons and contributed in many open-source projects. ",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "#3d Animals",
    description:
      "AR based learning which helps to enhance the learning of  childrens by learning through the 3d model with voice assistant.",
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
    source_code_link: "https://643d808d1694b518fe41d105--courageous-lebkuchen-c18142.netlify.app/ ",
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
