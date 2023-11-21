// "use client"; // note cada vez que ponemos la pagina del lado del cliente perdemos el ceo x

import Title from "@/components/ui/title";
// import Button from "@/components/ui/button"; // note:  tenemos que poner 'use client' en la primera linea
import Image, { StaticImageData } from "next/image";
import Container from "@/components/ui/container";

interface SectionHeaderProps {
  title: string;
  description: string;
  imageT: StaticImageData;
  href: string;
  details: string[];
}

const SectionHeader = ({
  title,
  description,
  imageT,
  href,
  details,
}: SectionHeaderProps) => {
  return (
    <section
      id={"Section Header"}
      className="border-b border-gray-500/30 py-10"
    >
      <Container>
        <Title title={title} className="mb-5 " />
        <p>{description}</p>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-5 gap-5">
          <a
            href={href}
            target="_blank"
            className="py-3 px-4  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 rounded-lg font-medium w-auto cursor-pointer"
          >
            View Code
          </a>
          <ul className="space-y-3 mb-10 ml-6">
            {details.map((item) => (
              <li
                className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
          <Image
            src={imageT}
            fill
            className="object-cover rounded-xl"
            alt={"imagenT"}
            sizes="100%"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHeader;
