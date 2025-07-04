import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoCss3 } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import expressLogo from "../assets/expressjs-logo.png";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";
import IPO from "../assets/IPO.png"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import { image, link } from "framer-motion/client";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  {/*{ label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },*/},
  { label: "Contact", href: "#contact" },
];
export default NAVIGATION_LINKS;



export const PROFILE = {
  name: "ChandraShaker R",
  info: "Full Stack Developer with a flair for clean UI and responsive design, blending frontend creativity with robust backend architecture to build seamless web experiences..",
};

export const ABOUT = {
  text1:
    "Every line of code I write brings creativity and functionality together on the screen. ",
  text2: "A full-stack web application built with the MERN stack for tracking, managing, and registering IPOs. Features include real-time IPO listings, admin dashboard with CRUD operations, broker comparison tools, and a community section. The app uses JWT-based authentication, RESTful APIs, and a fully responsive UI built with React, Bootstrap, and Tailwind CSS. Designed with scalability, clean architecture, and cross-device accessibility in mind.",
  //"Hello! I'm  Chandra Sehakr, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "IEEE-SB",
    subtitle:
      " A website for the IEEE student branch, showcasing events and resources platform built with ReactJs,TailwinCss.",
    image: image6,
    link: " "
  },
  {
    title: "IPO-Web-App-REST-API",
    subtitle: "Built a full-stack IPO management platform with JWT-based role access, RESTful APIs using Express.js, and MongoDB schema validation.Designed 15+ reusable React components with responsive UI using Bootstrap and Tailwind CSS, ensuring optimized performance and clean workflows..",
    image: IPO,
    link: "",
  },
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with HTML, CSS, JAVASCRIPT, BOOTSTRAP.",
    image: image1,
    link: "https://chandrashekarrravi.github.io/CS-E-Commerce/"
  },


];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "ReactJS",
    experience: "0.4+ year",
  },
  {
    icon: <TbBrandTailwind className="text-4xl lg:text-6xl text-white" />,
    name: "TailwindCSS",
    experience: "0.4+ year",
  },
  {
    icon: <TiHtml5 className="text-4xl lg:text-6xl text-white" />,
    name: "HTML",
    experience: "2+ year",
  },
  {
    icon: <BiLogoCss3 className="text-4xl lg:text-6xl text-green-600" />,
    name: "CSS",
    experience: "2+ year",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-gray-600" />,
    name: "GitHub",
    experience: "1+ year",
  },
  {
    icon: <TbBrandJavascript className="text-4xl lg:text-6xl text-yellow-600" />,
    name: "JavaScript",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-700" />,
    name: "Node.js",
    experience: "1+ year",
  },
  {
    icon: <img src={expressLogo} alt="Express.js" className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-black" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-500" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-green-500" />,
    name: "Mongoose",
    experience: "1+ year",
  },
  {
    icon: null,
    name: "C",
    experience: "1.5+ year",
  },
  {
    icon: null,
    name: "DSA",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/chan.drashekar23/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/chandrashekarRravi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/chandra-shekar6366189346",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/chandra-shekar6366189346",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

