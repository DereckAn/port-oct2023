import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Badge from "./badge";

interface CardFeaturedProps {
  hola:{
    href: string;
    image: StaticImageData;
    category: string;
    title: string;}
};

const CardFeatured = ({hola} : CardFeaturedProps) => {
  return (
    <Link href={`/work/${hola.href}`} className="group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={hola.image}
          alt="image cards"
          fill
          className="object-cover rounded-xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <Badge label={hola.category}/>
      <h3 className="text-white text-xl group-hover:text-primary transition-colors">
        {hola.title}
      </h3>
    </Link>
  );
};

export default CardFeatured;
