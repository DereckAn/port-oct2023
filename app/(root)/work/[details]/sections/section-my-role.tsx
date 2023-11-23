import Container from "@/components/ui/container";
import SquareList from "@/components/ui/square-list";
import Subtitle from "@/components/ui/subtitle";
import Image, { StaticImageData } from "next/image";

interface SectionMyRoleProps {
  responsabiliteies: string[];
  technologies: React.ElementType[];
  imageR: StaticImageData;
}

const SectionMyRole = ({
  responsabiliteies,
  technologies,
  imageR,
}: SectionMyRoleProps) => {
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
              <div className="text-gray-500 pt-3 ">
                <SquareList details={responsabiliteies} />
              </div>
            </li>
            <li className="xl:max-w-2xl lg:max-w-sm">
              <h4 className="text-xl text-white font-medium ">Technologies</h4>
              <div className="flex pt-3  gap-5">
                {technologies.map((Icon) => (
                  <Icon
                    key={Icon.toString}
                    size={30}
                    className="text-gray-500"
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
          <Image
            src={imageR}
            alt="image"
            fill
            className="object-cover rounded-xl "
            sizes="100%"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;
