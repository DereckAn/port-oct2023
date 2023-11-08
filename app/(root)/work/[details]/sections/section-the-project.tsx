import { cerdo } from "@/assets/images";
import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

const SectionTheProject = () => {
  return (
    <section id="Section The Project" className="border-b border-gray-500/30">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10">
          <Subtitle subtitle="The Project" className="my-0 " />
          <ul className="space-y-8">
            <li className="xl:max-w-2xl lg:max-w-sm ">
              <h4 className="text-xl text-white font-medium ">Challenges</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci accusantium sapiente debitis porro doloribus numquam,
                autem quasi maxime placeat aperiam et aliquam ab, reprehenderit
                laborum atque optio aut quibusdam voluptate?
              </p>
            </li>
            <li className="xl:max-w-2xl lg:max-w-sm">
              <h4 className="text-xl text-white font-medium ">Outcome</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci accusantium sapiente debitis porro doloribus numquam,
                autem quasi maxime placeat aperiam et aliquam ab, reprehenderit
                laborum atque optio aut quibusdam voluptate?
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10">
          <Image
            src={cerdo}
            alt="image"
            fill
            className="object-cover rounded-xl "
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
            <Image
              src={cerdo}
              alt="image"
              fill
              className="object-cover rounded-xl "
            />
          </div>
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
            <Image
              src={cerdo}
              alt="image"
              fill
              className="object-cover rounded-xl "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
