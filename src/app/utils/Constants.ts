// this will contain projects title desc image all the stuff that will grow in future so that ill add that here and will automatically reflect on portfolio

export const Intro = {
  name: "Pranav",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius ipsum maiores saepe autem porro in facilis magnam magni ea incidunt",
  tag: "software developer",
};

export const Project = [
  {
    name: "galley-based-port",
    title: "Gallery Based Portfolio",
    desc: "",
    path: "/images/projects/gallery-based.png",
    stack: "",
  },
  {
    name: "greenade-landing",
    title: "Greenade Landing Page",
    desc: "",
    path: "/images/projects/greenade-landing.png",
    stack: "",
  },
  {
    name: "controller-landing",
    title: "Sony Controller Landing Page",
    desc: "",
    path: "/images/projects/controller-landing.png",
    stack: "",
  },
  {
    name: "knowxt-blogs",
    title: "Knoxt Blogs",
    desc: "",
    path: "/images/projects/knowxt.png",
    stack: "",
  },
  {
    name: "spiderman-landing",
    title: "Spiderman Landing Page",
    desc: "",
    path: "/images/projects/spiderman-landing.png",
    stack: "",
  },
  {
    name: "e-commerce",
    title: "E-Commerce Store",
    desc: "",
    path: "/images/projects/e-comm.png",
    stack: "",
  },
  {
    name: "portfolio",
    title: "Portfolio",
    desc: "",
    path: "/images/projects/old-port.png",
    stack: "",
  },
  {
    name: "sahara-landing",
    title: "Sahara Desert Landing Page",
    desc: "",
    path: "/images/projects/sahara-landing.png",
    stack: "",
  },
  {
    name: "clock",
    title: "Digital Clock",
    desc: "",
    path: "/images/projects/clock.png",
    stack: "",
  },
];

interface ExperiencesProp {
  companyName: string;
  duration: string;
  role: string;
  desc: string[];
  stack: string[];
}

export const Experiences: ExperiencesProp[] = [
  {
    companyName: "Motwane Digital",
    duration: "May 2025 - Present",
    role: "Backend Developer",
    desc: [
      "Designed and implemented MongoDB aggregation pipelines in Node.js, improving data processing efficiency andreducing query response.",
      "Planned and executed code obfuscation for Node.js applications as part of on-premises build processes, securing source code and protecting reverse engineering risks.",
      "Reduced Docker image size by 60% by optimizing Node.js dependencies and refining build steps, resulting in faster deployment and lower resource consumption in on-premises environments.",
    ],
    stack: [],
  },
  {
    companyName: "TechB Software",
    duration: "Aug 2024 - Jan 2025",
    role: "Full Stack Intern",
    desc: [
      "Automated complex calculations of GEOA calculator by implementing calculations in backend improving security by reducing client-side data exposure and ensuring accuracy.",
      "Built caching mechanism and email notification automation by tracking and recalling previous request status ensuring notifications are sent accurately based on the status of each request.",
      "Optimized website performance by 60% by implementing best practices like pagination and lazy loading, improving load times and overall user experience",
      "Developed a phase-1 of product from scratch for a client, allowing users to search and place orders.",
    ],
    stack: [],
  },
  {
    companyName: "Mackinlay",
    duration: "March 2024 - June 2024",
    role: "Full Stack Intern",
    desc: [
      "Developed HR connect pro, a platform facilitating job search and streamlined candidate sourcing for HR professionals using ReactJS, ExpressJs and MongoDB.",
      "Learned React Native to collaborate with the mobile development team.",
    ],
    stack: [],
  },
];
