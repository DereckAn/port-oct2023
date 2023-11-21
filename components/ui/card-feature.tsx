import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Badge from "./badge";

interface CardFeaturedProps {
    id: number;
    href: string;
    imageC: StaticImageData;
    category: string;
    title: string;
}

const CardFeatured = ({ id, href, imageC, category, title }: CardFeaturedProps) => {
  return (
    <Link href={`/work/${id}`} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={imageC}
          alt="image cards"
          fill
          className="object-cover rounded-xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out"
          sizes="100%"
          placeholder = 'blur'
          loading = 'lazy'
        />
      </div>
      <Badge label={category} />
      <h3 className="text-white text-xl group-hover:text-primary transition-colors">
        {title}
      </h3>
    </Link>
  );
};

export default CardFeatured;
