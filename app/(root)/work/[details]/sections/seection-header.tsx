import Title from "@/components/ui/title";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/ui/container";
import SquareList from "@/components/ui/square-list";

interface SectionHeaderProps {
  title: string;
  description: string[];
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
        {description.map((item) => (
          <p key={item}>
            {item} <br /> <br />{" "}
          </p>
        ))}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-5 gap-5">
          <a
            href={href}
            target="_blank"
            className="py-3 px-4  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 rounded-lg font-medium w-auto cursor-pointer flex items-center justify-center"
          >
            View Code
          </a>
         <SquareList details={details} />
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl">
          <Image
            src={imageT}
            fill
            className="object-cover rounded-xl "
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
