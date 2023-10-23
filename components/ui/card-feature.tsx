import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardFeaturedProps {
    href: string;
    image: StaticImageData;
    category: string;
    title: string;
};

const CardFeatured = ({href, image, category, title} : CardFeaturedProps) => {
  return (
    <Link href={href} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="image cards"
          fill
          className="object-cover rounded-xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <h5 className="text-gray-500/30 uppercase tracking-widest text-xs">
        {category}
      </h5>
      <h3 className="text-white text-xl group-hover:text-primary transition-colors">
        {title}
      </h3>
    </Link>
  );
};

export default CardFeatured;
