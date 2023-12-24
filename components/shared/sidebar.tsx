"use client";

import Link from "next/link";
import { cn } from "@/libs/utils";
import MainMenu from "./main-menu";
import { information } from "@/assets/constants";

// note: se le añade una propiedad al componente
// note: Entre mas anadamos, mas propiedades va a pedir al llamarlo
interface SidebarProps {
  showMenu: boolean;
  onclose: () => void;
}
// note: sólo se está extrayendo la propiedad showMenu del objeto de propiedades. -->  {showMenu}: SidebarProps
// note: Le estamos añadiendo propiedades al componente para cuando lo llamemos en el layout.
const Sidebar = ({ showMenu, onclose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 bg-dark border-r border-gray-500/30  w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[14vw] h-full transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8  border-b border-gray-500/30">
          <Link
            href="/"
            className="text-2xl text-white hover:text-primary transition-colors duration-300"
          >
            {information.name}
          </Link>
          <h3 className=" font-light text-gray-400">{information.degree}</h3>
        </section>
        <section>
          <MainMenu />
        </section>
      </aside>
      <div
        onClick={onclose}
        className={cn(
          "fixed bg-black/20 z-40 left-0 top-0 w-full h-full lg:hidden ",
          showMenu ? "block" : "hidden"
        )}
      ></div>
    </>
  );
};

export default Sidebar;
