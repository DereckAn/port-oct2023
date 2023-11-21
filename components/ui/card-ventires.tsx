import Image, { StaticImageData } from "next/image";

interface CardVenturesProps {
    title: string;
    description: string;
    image: StaticImageData;
    href: string;
}

const CardVentures = ({title, description, image, href} :CardVenturesProps) => {
  return (
    <a href={href} target="_blanck" className="block group">
      <div className="relative w-14 h-14 rounded-xl mb-5 ">
        <Image
          src={image}
          alt="hola"
          fill
          className="object-cover rounded-xl"
          sizes="50%"
        />
      </div>
      <h3 className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-500">
        {description}
      </p>
    </a>
  );
};

export default CardVentures;
