import {
  RiInstagramLine,
  RiYoutubeLine,
  RiHome3Line,
  RiBriefcase2Line,
  RiUserLine,
  RiMegaphoneLine,
  RiEdit2Line,
} from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiDart, SiFastapi, SiGnubash } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoFlutter,
  BiLogoReact,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrArchlinux, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { BsFiletypeCss, BsFiletypeSql, BsGit } from "react-icons/bs";
import {
  cerdo,
  chat,
  dessertshop,
  ensign,
  expence,
  landing,
  lds,
  lumos,
  math,
  oldport2,
  port2,
  smile2,
  spotify,
} from "@/assets/images";

//I'm an iOS Developer with interest in Machine Learning and low-level graphics.
// I am an avid Snowboarder, ping me if you have a ride in mind. I, also love history and maps! Check my projects out.

export const information = {
  name: "Dereck Angeles",
  degree: "Computer Science",
  titulo: "Hey, I'm Dereck - I'm a Software Engineer",
  description:
    "With ability to build web and mobil aplications. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.",
  socialmedia: [
    {
      name: "Github",
      href: "https://github.com/DereckAn",
      icon: GrGithub,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/dereckan/",
      icon: GrLinkedinOption,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@dereckangeles4075/videos",
      icon: RiYoutubeLine,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dereckangeles/",
      icon: RiInstagramLine,
    },
  ],
};

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: RiHome3Line,
  },
  {
    name: "Work",
    path: "/work",
    icon: RiBriefcase2Line,
  },
  {
    name: "About",
    path: "/about",
    icon: RiUserLine,
  },
  {
    name: "Ventures",
    path: "/ventures",
    icon: RiUserLine,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: RiEdit2Line,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: RiMegaphoneLine,
  },
];

export const feacturedWork = [
  {
    title: "Portafolio",
    category: "Web",
    image: port2,
    href: "/details",
  },
  {
    title: "Spotify",
    category: "Web",
    image: spotify,
    href: "/details2",
  },
  {
    title: "Chat App",
    category: "Mobile",
    image: chat,
    href: "/details3",
  },
  {
    title: "Old Portafolio",
    category: "Web",
    image: oldport2,
    href: "/details3",
  },
  {
    title: "Math with Python",
    category: "Desktop",
    image: math,
    href: "/details3",
  },
  {
    title: "Landing Page",
    category: "Web",
    image: landing,
    href: "/details3",
  },
  {
    title: "Dessert Chop",
    category: "Desktop",
    image: dessertshop,
    href: "/details3",
  },
  {
    title: "Expence Tracker",
    category: "Mobile",
    image: expence,
    href: "/details3",
  },
];

export const testimonials = [
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Dereck Angeles",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Dereck Angeles",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Dereck Angeles",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Dereck Angeles",
  },
];

export const ventures = [
  {
    title: "Math Teacher Assistant",
    description: "Ensign College",
    image: ensign,
    href: "https://www.ensign.edu/",
  },
  {
    title: "Custodial",
    description: "Missionary Training Center",
    image: lds,
    href: "https://provo.mtc.byu.edu/",
  },
  {
    title: "Custodial",
    description: "Lumos Language School",
    image: lumos,
    href: "https://lumos.edu/",
  },
];

export const blogs = [
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/blog/details",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/blog/details",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/blog/details",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/blog/details",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/blog/details",
    age: "4 semans ago",
  },
];

export const tecnologies = [
  {
    name: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    name: "CSS",
    icon: BsFiletypeCss,
  },
  {
    name: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    name: "Java",
    icon: BiLogoJava,
  },
  {
    name: "Python",
    icon: BiLogoPython,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
  {
    name: "React",
    icon: BiLogoReact,
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    name: "Flutter",
    icon: BiLogoFlutter,
  },
  {
    name: "SQL",
    icon: BsFiletypeSql,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Linux",
    icon: GrArchlinux,
  },
  {
    name: "TailwindCSS",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
];
