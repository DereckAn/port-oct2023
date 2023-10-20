import {
  RiInstagramLine,
  RiYoutubeLine,
  RiHome3Line,
  RiBriefcase2Line,
  RiUserLine,
  RiMegaphoneLine,
  RiEdit2Line,
} from "react-icons/ri";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { cerdo, smile2 } from "@/assets";

export const information = {
  name: "Dereck Angeles",
  degree: "Computer Science",
  titulo:
    "Hey, I'm Dereck - I'm a Software Engineer ... poner mas cosas perono tantas ",
  description:
    "Soy un estudiante de computer science. estoy por graduarme del college y poner mas cosas aqui",
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
    name: "Projects",
    path: "/projects",
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
    title: "hola1",
    category: "hola",
    image: cerdo,
    href: "/work/details",
  },
  {
    title: "hola",
    category: "hola",
    image: cerdo,
    href: "/",
  },
  {
    title: "hola",
    category: "hola",
    image: cerdo,
    href: "/",
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
    title: "hola1",
    description: "hola",
    image: cerdo,
    href: "/",
  },
  {
    title: "hola1",
    description: "hola",
    image: cerdo,
    href: "/",
  },
  {
    title: "hola1",
    description: "hola",
    image: cerdo,
    href: "/",
  },
]

export const blogs = [
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/",
    age: "4 semans ago",
  },
  {
    title: "como conectar ble to react",
    category: "tecnology",
    image: smile2,
    href: "/",
    age: "4 semans ago",
  }
]
