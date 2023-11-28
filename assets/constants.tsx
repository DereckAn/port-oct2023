import {
  aa,
  cerdo,
  chat,
  dd,
  dessertshop,
  ensign,
  expence,
  ff,
  landing,
  lds,
  lumos,
  math,
  oldport2,
  port2,
  smile2,
  spotify,
  ss,
  youdown,
  youdown2,
  youdown3,
} from "@/assets/images";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoFlutter,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsFiletypeCss, BsFiletypeSql, BsGit } from "react-icons/bs";
import { GrArchlinux, GrGithub, GrLinkedinOption } from "react-icons/gr";
import {
  RiBriefcase2Line,
  RiEdit2Line,
  RiHome3Line,
  RiInstagramLine,
  RiMegaphoneLine,
  RiSupabaseLine,
  RiUserLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { SiDart, SiFastapi, SiGnubash, SiNextdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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

export const featureworkpagefull = [
  {
    id: 1,
    title: "Portafolio",
    category: "Web",
    imageC: port2,
    href: "https://github.com/DereckAn/port-oct2023",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Personal Project", "Timeline: 2 weeks", "Product Design"],
    imageR: aa,
    responsabiliteies: [
      `To look for a clean and attractive professional design to the public.`,
      `Constantly update the information it contains.`,
      `To project the information in a concise and easy to digest way.`,
      `Optimization of the page (SEO).`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],

    imageP: ss,
    challenge:
      "NextJS, being a framework with which I do not yet have a vast experience, presented several challenges during the development of this project. The management of server components and page optimization were undoubtedly the most significant hurdles I had to overcome. In addition, NextJS application path manipulation and dynamic page implementation were concepts that required considerable effort to fully grasp. Despite these challenges, I continued to learn and adapt throughout the process.",
    outcome:
      "Thanks to this project I was able to put into practice my knowledge of web development, and also helped me to learn new technologies such as NextJS, TailwindCSS and Typescript. It also helped me to improve my design skills and learn new design techniques.",
    imageBR: dd,
    imageBL: ff,
  },
  {
    id: 2,
    title: "Spotify",
    category: "Web",
    imageC: spotify,
    href: "https://github.com/DereckAn/react-proj/tree/main/spotify",
    description: [
      `This project was created with the intention of having a music player on the web, and at the same time learn to implement technologies such as nextjs, typescript, tailwindcss, supabase, and react-query. 
      Implement user authentication, and the possibility to create playlist, and add songs to the playlist, saving all the songs with their names, images and url in the supabase database.`,
      `Para descargar las canciones use codigo python para descargar las canciones de youtube y `,
    ],
    details: ["Industry: Music", "Timeline: Still Working", "Web Development"],
    imageR: spotify,
    responsabiliteies: [
      `Try to make the page as close to the original as possible`,
      `Investigate how the supabase api works`,
      `Save the information of the songs in the database`,
      ` Download songs from youtube in the most optimal way possible`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
      BiLogoPython,
      RiSupabaseLine,
    ],
    imageP: spotify,
    challenge:
      "The difficulties I faced when tackling this project were the implementation of the supabase api, and the implementation of user authentication, as I had no experience with these technologies, but thanks to the supabase documentation and the nextjs documentation I was able to implement them successfully. Also the downloading of the songs was a challenge since I didn't know how to do it.",
    outcome:
      "Thanks to this project I was able to learn new technologies such as supabase, react-query, and nextjs. I was also able to improve my backend skills, and learn new techniques to download songs from youtube.",
    imageBR: spotify,
    imageBL: spotify,
  },
  {
    id: 3,
    title: "Chat App",
    category: "Mobile",
    imageC: chat,
    href: "https://github.com/DereckAn/FlutterProjects/tree/main/chat_app",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Actualizar constantemente la información que este contiene`,
      `Proyectar la información de manera concisa y fácil de digerir.`,
      `Optimización de la página. (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    id: 4,
    title: "Old Portafolio",
    category: "Web",
    imageC: oldport2,
    href: "https://github.com/DereckAn/portafolio.git",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Actualizar constantemente la información que este contiene`,
      `Proyectar la información de manera concisa y fácil de digerir.`,
      `Optimización de la página. (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    id: 5,
    title: "Math with Python",
    category: "Desktop",
    imageC: math,
    href: "https://github.com/DereckAn/practice/tree/main/Python/Math",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Actualizar constantemente la información que este contiene`,
      `Proyectar la información de manera concisa y fácil de digerir.`,
      `Optimización de la página. (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    id: 6,
    title: "Landing Page",
    category: "Web",
    imageC: landing,
    href: "https://github.com/DereckAn/landingpage.git",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `To look for a clean and attractive professional design to the public`,
      `Constantly update the information it contains`,
      `To project the information in a concise and easy to digest way`,
      `Optimization of the page (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    id: 7,
    title: "Dessert Chop",
    category: "Desktop",
    imageC: dessertshop,
    href: "https://github.com/DereckAn/practice/tree/main/Java",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Actualizar constantemente la información que este contiene`,
      `Proyectar la información de manera concisa y fácil de digerir.`,
      `Optimización de la página. (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    id: 8,
    title: "Expence Tracker",
    category: "Mobile",
    imageC: expence,
    href: "https://github.com/DereckAn/FlutterProjects/tree/main/expences020",
    description: [
      `This project is a personal project. It is a testament to my skills and competencies as a web developer. It was built using cutting-edge technologies such as NextJS, TailwindCSS and Typescript, demonstrating my proficiency in these tools and my ability to keep up with current trends in web development.
    The main goal of this project was to put into practice and demonstrate a variety of technical skills. Among them, Server Side Rendering (SSR), Search Engine Optimization (SEO) and Responsive Design.`,

      `In addition, this project was intended to replace my old portfolio, which was developed with ReactJS. While ReactJS is a powerful tool in its own right, the decision to migrate to NextJS for this project represents my commitment to continuous improvement and adaptability, two essential qualities for any successful web developer.
    In short, this project is not only a showcase of my technical skills, but also a representation of my passion for web development and my commitment to excellence in my work. I'm excited to share it with the world and hope it serves as an inspiring example for other emerging developers.
    `,
    ],
    details: ["Industry: Blogging", "Timeline: 2 weeks", "Product Design"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Actualizar constantemente la información que este contiene`,
      `Proyectar la información de manera concisa y fácil de digerir.`,
      `Optimización de la página. (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      SiNextdotjs,
      BiLogoTailwindCss,
      BsGit,
      BiLogoTypescript,
    ],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
];

export const testimonials = [
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Photography",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Reading",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Piano",
  },
  {
    message: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem",
    job: "hola",
    image: cerdo,
    name: "Hiking",
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
    icon: SiNextdotjs,
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

export const blogs = [
  {
    id: 1,
    title: "Download videos from YouTuve with python",
    category: "Python",
    image: youdown,
    age: "1 week ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["Un Titulo Random 1", "Un titulo random 2", "subtitulo 3"],
    lista: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
  },
  {
    id: 2,
    title: "como conectar ble to react2",
    category: "tecnology",
    image: cerdo,
    age: "4 semans ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["subtitulo 1", "subtitulo 2", "subtitulo 3"],
    lista: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
  },
  {
    id: 3,
    title: "como conectar ble to react3",
    category: "tecnology",
    image: ff,
    age: "4 semans ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["subtitulo 1", "subtitulo 2", "subtitulo 3"],
    lista: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
  },
  {
    id: 4,
    title: "como conectar ble to react4",
    category: "tecnology",
    image: smile2,
    age: "4 semans ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["subtitulo 1", "subtitulo 2", "subtitulo 3"],
    lista: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
  },
  {
    id: 5,
    title: "como conectar ble to react5",
    category: "tecnology",
    image: smile2,
    age: "4 semans ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["subtitulo 1", "subtitulo 2", "subtitulo 3"],
    lista: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2]
  },
];
