"use client";

import Footer from "@/components/shared/footer";
import Sidebar from "@/components/shared/sidebar";
import ButtonIcon from "@/components/ui/button-icon";
import { ReactNode, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* // note: showMenu y setShowMenu es para las sfuncionalidades del boton  */}
      <Sidebar showMenu={showMenu} onclose={() => setShowMenu(false)} />
      {/* // note: ponemos el boton aqui para que se vea en todas las paginas */}
      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-0 bottom-0 z-30 bg-primary p-4  rounded-tl-lg"
      />

      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

// note: este es el layout de la pagina principal.
// ! El layout principal NUCA se convierte del lado del cliente
// note: Se hace esto para evitar convertir el otro layout del lado del cliente y perder propiedades del servidor.
// & line 1

// note: Cuando ponemos un folder con parentesis en el nombre, next lo convierte en un archivo de ruta dinamica
// note: ejemplo: (root)
