import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardHobiesProps {
    image: StaticImageData;
    hobbie: string;
    link: string;
  }

const CardHobbies = ({image, hobbie, link} :CardHobiesProps) => {
  return (
    <Link className='group' href={link} >
      <div className="relative w-64 h-72 rounded-3xl  overflow-hidden border-2 dark:border-gray-300/30 group-hover:border-primary transition-all duration-300 ">
        <Image
          src={image}
          alt="Image"
          fill
          sizes="50%"
          className="object-cover rounded-3xl z-10  group-hover:scale-110 transition-all duration-300  "
        />
      </div>
      <div className="border  dark:border-gray-300/30 px-4 pt-12 pb-6 rounded-b-3xl  -translate-y-8 max-w-xl group-hover:border-primary ">
        <h5 className="text-xl text-center mb-4 group-hover:text-primary ">{hobbie}</h5>
      </div>
    </Link>
  );
};

export default CardHobbies;