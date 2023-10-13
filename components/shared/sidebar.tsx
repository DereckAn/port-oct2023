"use client";

import Link from "next/link";
import { cn } from "@/libs/utils";
import MainMenu from "./main-menu";


// note: se le añade una propiedad al componente
// note: Entre mas anadamos, mas propiedades va a pedir al llamarlo
interface SidebarProps {
  showMenu: boolean;
}
// note: sólo se está extrayendo la propiedad showMenu del objeto de propiedades. -->  {showMenu}: SidebarProps
// note: Le estamos añadiendo propiedades al componente para cuando lo llamemos en el layout.
const Sidebar = ({showMenu}: SidebarProps) => {
  return (
    <aside className={cn("fixed top-0 bg-dark border-r border-gray-500/30  w-[70vw] md:w-[30vw]  lg:w-[13vw] h-full transition-all duration-300 ease-in-out", showMenu ? "left-0" : '-left-full')}>
      <section className="p-8  border-b border-gray-500/30">
        <Link
          href="/"
          className="text-2xl text-white hover:text-primary transition-colors duration-300"
        >
          Dereck Angeles
        </Link>
        <h3 className=" font-light text-gray-400">Software Engineer</h3>
      </section>
      <section>
        <MainMenu />
      </section>
    </aside>
  );
};

export default Sidebar;
