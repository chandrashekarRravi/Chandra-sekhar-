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


import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
export default NAVIGATION_LINKS;



export const PROFILE = {
  name: "ChandraShaker R",
  info: "Front-End developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "Every line of code I write brings creativity and functionality together on the screen. ",
  text2: "I am a frontend developer skilled in HTML, CSS, JavaScript, and ReactJS, with expertise in Bootstrap for creating responsive designs. I hold certifications in these technologies, showcasing my dedication to growth. In the next 2–3 years, I aspire to advance as a frontend engineer or explore opportunities as a UI/UX designer.A versatile tech enthusiast with a strong commitment to knowledge sharing and innovation.I wear multiple hats as where I focus on Learning Front-end development, and huframe-works engaging in in-depth discussions about the ever-evolving tech landscape.",
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
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with HTML, CSS, JAVASCRIPT, BOOTSTRAP.",
    image: image1,
    link: "https://chandrashekarrravi.github.io/CS-E-Commerce/"
  },
  {
    title: "ToDO List",
    subtitle:
      "A simple to-do list application built with  ReactJS and TailwindCSS.",
    image: image2,
  },
  {
    title: "Weather App",
    subtitle:
      "A weather dashboard application built with  ReactJS and TailwindCSS.",
    image: image4,
  }, {
    title: "Progress Bar",
    subtitle:
      " A progress bar application built with HTML, CSS, and JavaScript.",
    image: image3,
  }, {
    title: "Bites-LangingPage",
    subtitle:
      "  A landing page for a food delivery service built with HTML, CSS, and JavaScript.",
    image: image5,
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

    name: "C",
    experience: "1.5+ year",
  },
  {

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
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
