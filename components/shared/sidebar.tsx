import Link from "next/link";
import MainMenu from "./main-menu";

const Sidebar = () => {
  return (
    <aside className="fixed bg-dark border-r border-gray-500/30 w-[13vw] h-full">
      <section className="p-8  border-b border-gray-500/30">
        <Link href="/" className="text-2xl text-white hover:text-primary transition-colors duration-300">Dereck Angeles</Link>
        <h3 className=" font-light text-gray-400">Software Engineer</h3>
      </section>
      <section>
        <MainMenu/>
      </section>
    </aside>
  );
};

export default Sidebar;
