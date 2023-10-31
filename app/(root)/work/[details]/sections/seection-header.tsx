"use client"; // note cada vez que ponemos la pagina del lado del cliente perdemos el ceo x

import Title from "@/components/ui/title";
import Button from "@/components/ui/button"; // note:  tenemos que poner 'use client' en la primera linea
import { cerdo } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/ui/container";

interface SectionHeaderProps {
  hola: {
    href: string;
    image: StaticImageData;
    category: string;
    title: string;
  };
};

const SectionHeader = ({hola} : SectionHeaderProps) => {
  return (
    <section
      id={"Section Header"}
      className="border-b border-gray-500/30 py-10"
    >
      <Container>
        <Title title={`${hola.title}`} className="mb-5 " />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          atque magnam iste? Doloribus, vel? Nemo suscipit reprehenderit
          voluptatibus dolor doloribus porro maiores similique aliquam et
          consectetur! Architecto laborum nisi sequi!
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-5 gap-5">
          <Button label="View Live App" onClick={() => {}} className="w-auto" />
          <ul className="space-y-3 mb-10 ml-6">
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2">
              Industry: Blogging
            </li>
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2">
              Timeline: 2 weeks
            </li>
            <li className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2">
              Product Design
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
          <Image
            src={`${hola.image}`}
            fill
            className="object-cover rounded-xl"
            alt={"asdfghjkl"}
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHeader;
