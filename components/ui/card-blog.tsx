import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardBlogProps {
  title: string;
  category: string;
  image: StaticImageData;
  age: string;
  id: number;
}

const CardBlog = ({ title, category, image, age, id }: CardBlogProps) => {
  return (
    <Link
      href={`./blog/${title}`}
      className="group flex flex-col md:flex-row gap-5 items-center"
    >
      {/* //target="_blank"  es para abrir ptra pestana  */}
      <div className="relative w-56 h-40 rounded-xl mb-5 overflow-hidden ">
        <Image
          sizes="100%"
          src={image}
          alt="hola"
          fill
          className="object-cover rounded-xl group-hover:scale-110 transition-all duration-300 "
          priority={false}
          placeholder = 'blur'
          loading = 'lazy'
        />
      </div>
      <div className="space-y-2">
        <h5 className="text-sm uppercase font-semibold tracking-widest text-gray-500">
          {category}
        </h5>
        <h3 className="text-white text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm uppercase font-semibold tracking-widest text-gray-500">
          {age}
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
