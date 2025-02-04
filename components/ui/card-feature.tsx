import { MarkdownData } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";

// interface CardFeaturedProps {
//     imageC: StaticImageData;
//     category: string;
//     title: string;
// }

interface CardFeaturedProps {
  project: MarkdownData;
}

const CardFeatured = ({ project }: CardFeaturedProps) => {
  return (
    <Link href={`/work/${encodeURIComponent(project.title)}`} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={project.imageC}
          alt="image cards"
          fill
          className="object-cover rounded-xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out"
          sizes="100%"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <Badge label={project.category} />
      <h3 className="text-white text-xl group-hover:text-primary transition-colors">
        {project.title}
      </h3>
    </Link>
  );
};

export default CardFeatured;
