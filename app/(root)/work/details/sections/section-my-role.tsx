import { cerdo } from "@/assets";
import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

const SectionMyRole = () => {
  return (
    <section id="Section Header" className="border-b border-gray-500/30">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <Subtitle subtitle="My Role" />
          <ul className="space-y-8">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium ">
                Responsabilities
              </h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci accusantium sapiente debitis porro doloribus numquam,
                autem quasi maxime placeat aperiam et aliquam ab, reprehenderit
                laborum atque optio aut quibusdam voluptate?
              </p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium ">
                Responsabilities
              </h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci accusantium sapiente debitis porro doloribus numquam,
                autem quasi maxime placeat aperiam et aliquam ab, reprehenderit
                laborum atque optio aut quibusdam voluptate?
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
            <Image src={cerdo} alt="image" fill className="object-cover rounded-xl "/>

        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;
