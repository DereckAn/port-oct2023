import { cn } from "@/libs/utils";
import Link from "next/link";
import { RiHome3Line, RiBriefcase2Line, RiUserLine, RiMegaphoneLine  , RiEdit2Line} from "react-icons/ri";

const MainMenu = () => {
  const routes = [
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

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn("flex items-center gap-4 text-gray-500 p-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/10 hover:text-primary transition-colors duration-300  cursor-pointer")}
          >
            <route.icon size={18} />
            {route.name}
            {/* <RiHome3Line size={18} />  Home //note Esto es para que se vea el icono */}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
