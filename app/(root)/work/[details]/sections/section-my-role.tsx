import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image, { StaticImageData } from "next/image";

interface SectionMyRoleProps {
  responsabiliteies: string;
  technologies: string;
  imageR: StaticImageData;
};

const SectionMyRole = ( {responsabiliteies, technologies, imageR } : SectionMyRoleProps ) => {
  return (
    <section id="Section My Role" className="border-b border-gray-500/30">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10">
          <Subtitle subtitle="My Role" className="my-0" />
          <ul className="space-y-8">
            <li className="xl:max-w-2xl lg:max-w-sm">
              <h4 className="text-xl text-white font-medium ">
                Responsabilities
              </h4>
              <p className="text-sm text-gray-500">
                {responsabiliteies}
              </p>
            </li>
            <li className="xl:max-w-2xl lg:max-w-sm">
              <h4 className="text-xl text-white font-medium ">
                Responsabilities
              </h4>
              <p className="text-sm text-gray-500">
                {technologies}
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
          <Image
            src={imageR}
            alt="image"
            fill
            className="object-cover rounded-xl "
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;
