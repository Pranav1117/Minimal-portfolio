// this will contain projects title desc image all the stuff that will grow in future so that ill add that here and will automatically reflect on portfolio

interface IntroProp {
  name: string;
  desc: string;
  tag: string[];
}

export const Intro: IntroProp = {
  name: "Pranav",
  desc: "Full stack developer, experience in early-stage startup's and product based firms, 9 months internship exp in early stage startups(3 + 6), now working as a backend dev in product based company",
  tag: ["Software Developer", "Gamer", "Open World Explorer"],
};

export const Project = [
  {
    name: "galley-based-port",
    title: "Gallery Based Portfolio",
    desc: "Built this portfolio for hackathon, got selected in top 1% contestants qualifying for freelance opportunity",
    path: "/images/projects/gallery-based.png",
    stack: "",
    link: "https://gallery-based-portfolio.vercel.app/",
  },
  {
    name: "greenade-landing",
    title: "Greenade Landing Page",
    desc: "Nothing to see here, just landing page",
    path: "/images/projects/greenade-landing.png",
    stack: "https://greenade-landing-page.vercel.app/",
  },
  {
    name: "controller-landing",
    title: "Sony Controller Landing Page",
    desc: "Again nothing to see here, just landing page",
    path: "/images/projects/controller-landing.png",
    stack: "",
    link: "https://controller-landing-page.vercel.app/",
  },
  {
    name: "trend-aggregator",
    title: "Trend Aggregator",
    desc: "A webpage that shows trending topic from youtube and reddit, summarizes using Mistral's AI model to give u imp info",
    path: "/images/projects/trend-agg.png",
    stack: "",
    link: "https://trend-aggregator.vercel.app/",
  },
  {
    name: "knowxt-blogs",
    title: "Knoxt Blogs",
    desc: "Site to write and upload your blogs",
    path: "/images/projects/knowxt.png",
    stack: "",
    link: "https://knowxt.vercel.app/",
  },
  {
    name: "spiderman-landing",
    title: "Spiderman Landing Page",
    desc: "Landing Page Noooo - 4",
    path: "/images/projects/spiderman-landing.png",
    stack: "",
    link: "https://spiderman-landing-page-one.vercel.app/",
  },
  {
    name: "e-commerce",
    title: "E-Commerce Store",
    desc: "Basic E-commerce store",
    path: "/images/projects/e-comm.png",
    stack: "",
    link: "https://e-commerce-frontend-qtvx.onrender.com",
  },
  {
    name: "portfolio",
    title: "Portfolio",
    desc: "Old portfolio inspired by someones tweet's",
    path: "/images/projects/old-port.png",
    stack: "",
    link: "https://portfolio-31qw.onrender.com",
  },
  {
    name: "sahara-landing",
    title: "Sahara Desert Landing Page",
    desc: "Beginner landing page for sahara desert, build this when I was learning CSS",
    path: "/images/projects/sahara-landing.png",
    stack: "https://pranav1117.github.io/Sahara-desert-landing-page/",
  },
  {
    name: "clock",
    title: "Digital Clock",
    desc: "Webpage that shows timing with customize alarm and dynamic image change based on timing",
    path: "/images/projects/clock.png",
    stack: "https://pranav1117.github.io/Digital-Clock-js-13-Sept/",
  },
];

export interface ExperiencesProp {
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
