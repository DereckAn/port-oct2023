import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image, { StaticImageData } from "next/image";

interface SectionTheProjectProps {
  challenge: string;
  outcome: string;
  imageP: StaticImageData;
  imageBR: StaticImageData;
  imageBL: StaticImageData;
}

const SectionTheProject = ({
  challenge,
  outcome,
  imageP,
  imageBR,
  imageBL,
}: SectionTheProjectProps) => {
  return (
    <section id="Section The Project" className="border-b border-gray-500/30">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10">
          <Subtitle subtitle="The Project" className="my-0 " />
          <ul className="space-y-8">
            <li className="xl:max-w-2xl lg:max-w-sm ">
              <h4 className="text-xl text-white font-medium ">Challenges</h4>
              <p className="text-sm text-gray-500">{challenge}</p>
            </li>
            <li className="xl:max-w-2xl lg:max-w-sm">
              <h4 className="text-xl text-white font-medium ">Outcome</h4>
              <p className="text-sm text-gray-500">{outcome}</p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10">
          <Image
            src={imageP}
            alt="image"
            fill
            className="object-cover rounded-xl "
            sizes="100%"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
            <Image
              src={imageBL}
              alt="image"
              fill
              className="object-cover rounded-xl "
              sizes="100%"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
            <Image
              src={imageBR}
              alt="image"
              fill
              className="object-cover rounded-xl "
              sizes="100%"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
