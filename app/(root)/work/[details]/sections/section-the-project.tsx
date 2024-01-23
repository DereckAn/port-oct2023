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

const ImageComponent = ({ src }: { src: StaticImageData }) => (
  <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl ">
    <Image
      src={src}
      alt="image"
      fill
      className="object-cover rounded-xl "
      sizes="100%"
      placeholder="blur"
      loading="lazy"
    />
  </div>
);

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
        <ImageComponent src={imageP} />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pt-10">
          <ImageComponent src={imageBL} />
          <ImageComponent src={imageBR} />
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
