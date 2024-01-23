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
  menugame,
  oldport2,
  port2,
  smile2,
  snakescre,
  spotify,
  ss,
  wiima,
  wilink,
  youdown,
  youdown2,
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
import {
  SiDart,
  SiFastapi,
  SiFirebase,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";

export const information = {
  name: "Dereck Angeles",
  degree: "Software Engineer",
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
    title: "Games App",
    category: "Mobile",
    imageC: menugame,
    href: "https://github.com/DereckAn/games_app.git",
    description: [
      `With this project I wanted to put my programming logic into practice. And I'm really putting them into practice! My goal is to recreate each mobile game and then improve it or add a few extra features and improvements.
       I also want to modify the games to be multiplayer and playable online.`,
    ],
    details: ["In Progress", "Personal Project", "Flutter - Dart"],
    imageR: snakescre,
    responsabiliteies: [
      `Implement the logic of each game`,
      `Build the mobile app`,
      `Find a way to adapt the games to be multiplayer`,
    ],
    technologies: [BsGit, BiLogoFlutter],
    imageP: cerdo,
    challenge:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    title: "Images to Code with AI",
    category: "Web",
    imageC: wiima,
    href: "https://github.com/DereckAn/ima2code.git",
    description: [
      `This project came up because I need a way to create web components in a faster way and focus on other things. For this I was learning how to use the OpenAI API and how to send requests and receive information from the API.
      from the API. My focus was to use the API but in the future I will take care of making the site more presentable. And with more functionalities.`,
    ],
    details: ["In Progress", "Personal Project", "OpenAI - API"],
    imageR: wilink,
    responsabiliteies: [
      `Send request to the OpenAI API`,
      `Build the web page`,
      `Display the API information in an understandable way`,
      `Enter the prompt engineering to improve the quality of the information I receive from the API`,
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
      `The main challege was to fetch the data from GPT APIs and moldearla to diplsay it in a user friendly way. 
      Also, trying to adapt the prompt was a little tricky beacuse sometimes I did not get the desire result. `,
    outcome:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium sapiente debitis porro doloribus numquam, autem quasi maxime placeat aperiam et aliquam ab, reprehenderit laborum atque optio aut quibusdam voluptate?",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
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
    title: "Chat App",
    category: "Mobile",
    imageC: chat,
    href: "https://github.com/DereckAn/FlutterProjects/tree/main/chat_app",
    description: [
      `Developed an interactive chat application using Flutter for the user interface and Supabase for real-time data management. I implemented user authentication, message storage and real-time updates using Supabase Authentication and Cloud Firestore.`,

      `I designed and built an intuitive and engaging user interface with Flutter that allows users to send and receive messages in real-time.
      Ensured code quality and maintainability using Flutter best practices and software design principles.`,
    ],
    details: ["Social Media", "Timeline: 2-3 weeks", "Mobile Development"],
    imageR: chat,
    responsabiliteies: [
      `User Interface (UI) Design`,
      `Feature Development`,
      `Firebase Integration`,
      `Maintenance and Updates`,
    ],
    technologies: [BiLogoFlutter, BsGit, SiFirebase],
    imageP: chat,
    challenge:
      "The main challenge i faced with this project was to use the Firebase API and to syncornize the messages in real time. Also, testing the application was another challenge, since I had to test it on two different devices, and I just have one emulator at that time.",
    outcome:
      "Successfully develop a fully functional chat application with real-time messaging capabilities.",
    imageBR: chat,
    imageBL: chat,
  },

  {
    title: "Old Portafolio",
    category: "Web",
    imageC: oldport2,
    href: "https://github.com/DereckAn/portafolio.git",
    description: [
      `This was one of my first projects. I did it when I was starting to learn programming and web development. The purpose was to put into practice what I was learning and challenge myself to design a web page and deploy it on the internet using github pages.`,
    ],
    details: ["Personal Portafolio", "Timeline: 3 weeks", "Web Development"],
    imageR: cerdo,
    responsabiliteies: [
      `To look for a clean and attractive professional design to the public`,
      `Make the site responsive`,
      `Learn how to use animations and incorporate them into my components`,
      `Upload it to github pages`,
    ],
    technologies: [
      BsGit,
      BiLogoJavascript,
      BiLogoReact,
      AiOutlineHtml5,
      BsFiletypeCss,
      BiLogoTailwindCss,
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
    title: "Math with Python",
    category: "Desktop",
    imageC: math,
    href: "https://github.com/DereckAn/practice/tree/main/Python/Math",
    description: [
      `This project is a series of exercises that I made to practice python and at the same time reinforce mathematics. The exercises cover topics such as algebra, calculus, trigonometry, etc. 
      As part of the project I also had to learn how to graph data and learn how to display it in a readable and understandable way, for that I used Latex. `,
    ],
    details: ["Mathematics", "Latex", "Python"],
    imageR: cerdo,
    responsabiliteies: [
      `Develop the integer where the data is plotted`,
      `Find compatibility between python libraries (matplotlib, numpy, sympy, etc)`,
      `Learn to use Latex to display the data in an understandable way`,
    ],
    technologies: [BiLogoPython],
    imageP: cerdo,
    challenge:
      "I found interesting the syntax of latex and how it can be used to display data in an understandable way. Although it is a bit complicated, I enjoyed it a lot. I also learned a lot about the python libraries and how to update them to be compatible with each other",
    outcome:
      "These exercises helped me to use Python and to reinforce my knowledge of mathematics. It also helped me to learn how to use latex and to graph data in an understandable way.",
    imageBR: cerdo,
    imageBL: cerdo,
  },
  {
    title: "Landing Page",
    category: "Web",
    imageC: landing,
    href: "https://github.com/DereckAn/landingpage.git",
    description: [
      `Este proyecto fue para poner en practica mis conocimientos en react. El proposito fue hacer una pagina web que sea responsive y que tenga un buen diseño. Quise hacer una pagina en tiempo record. Solo me di 3 dias para terminar esta pagina. `,
      `Para terminar la pagina use componentes ya hechos de Syncfunction. `,
    ],
    details: ["Personal Project", "Timeline: 1 weekend", "Re-use components"],
    imageR: cerdo,
    responsabiliteies: [
      `Buscar un diseño profesional limpio y atractivo al público`,
      `Constantly update the information it contains`,
      `To project the information in a concise and easy to digest way`,
      `Optimization of the page (SEO)`,
    ],
    technologies: [
      AiOutlineHtml5,
      BsFiletypeCss,
      BiLogoTailwindCss,
      BsGit,
      BiLogoReact,
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
      "",
      "I wanted to download videos from youtube in a fast way and I didn't feel very confident using the websites.",
    ],
    subtitles: ["Just Python Code", "Steps", "subtitulo 3"],
    lista: [
      "Import the necessary libraries - pip install tkinter customtkinter pytube ",
      "Configures the GUI appearance and creates an application window with a specific size and a title.",
      "Creates several widgets in the GUI, including a title, an input field for the YouTube video URL, a progress bar and percentage to show the download progress, and a button to start the download.",
      "Define una progress_function que se llama cada vez que se descarga un fragmento de vídeo. Esta función actualiza la barra de progreso y el porcentaje en la GUI.",
      `Defines a download_video function that is called when the download button is pressed. This function creates a YouTube object with the provided URL, downloads the
      video at the highest available resolution, and updates the GUI to display the video title and a success or failure message.`,
      `Create a label widget to display a message when download is completed.`,
      `Starts the main application loop, which keeps the GUI open and responds to user events (such as pressing the download button).`,
    ],
    images: [youdown2],
    href: "https://github.com/DereckAn/python-projects/blob/main/video_down.py",
  },
  {
    id: 2,
    title: "Convert images with python",
    category: "Python",
    image: cerdo,
    age: "4 semans ago",
    descriptions: [
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
      "Description - tiene que ser un parrafo pequeno pero no tan pequeno",
    ],
    subtitles: ["subtitulo 1", "subtitulo 2", "subtitulo 3"],
    lista: [
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
    href: "https://github.com/DereckAn/landingpage.git",
  },
  {
    id: 3,
    title: "Connect Bluetooth Low Energy to React",
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
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
    href: "https://github.com/DereckAn/landingpage.git",
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
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
    href: "https://github.com/DereckAn/landingpage.git",
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
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    ],
    images: [youdown2],
    href: "https://github.com/DereckAn/landingpage.git",
  },
];

