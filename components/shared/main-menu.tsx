import { routes } from "@/assets/constants";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathName = usePathname();

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex items-center gap-4 text-gray-500 p-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/10 hover:text-primary transition-colors duration-300 cursor-pointer",
              pathName === route.path &&
                "text-primary border-primary border-2"
            )}
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
