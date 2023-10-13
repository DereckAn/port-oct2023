"use client";

import Sidebar from "@/components/shared/sidebar";
import { ReactNode, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

// note: los segundos children van a ser tipo reactNode
const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu}/>
      <header>
        {/* // note: ponemos el boton aqui para que se vea en todas las paginas */}
        <button type="button"> 
          <RiMenu2Line onClick={() => setShowMenu(true)}/>
        </button>
      </header>
      {children}
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
