import { IconType } from "react-icons";

// note:  Creo que ponermos interface cuando queramos que tenga parametros los componentes
interface ButtonSolcialMediaProps {
  icon: IconType;
  href: string;
}

const ButtonSolcialMedia = ({ icon: Icon, href }: ButtonSolcialMediaProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center border border-gray-500/30 rounded-lg text-gray-500 hover:text-white transition-colors duration-300 hover:bg-gray-500/10"
    >
      <Icon size={22} />
    </a>
  );
};

export default ButtonSolcialMedia;
