import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { LuInstagram, LuTwitter, LuTwitch, LuGlobe } from 'react-icons/lu';
import { FaPhotoVideo } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";
import { TbBrandMinecraft } from "react-icons/tb";


interface CardHobiesProps {
    image: StaticImageData;
    hobbie: string;
  }

const CardHobbies = ({image, hobbie} :CardHobiesProps) => {
  return (
    <div className='group'>
      <div className="relative w-64 h-72 rounded-3xl  overflow-hidden border-2 dark:border-gray-300/30 group-hover:border-primary ">
        <Image
          src={image}
          alt="Image"
          fill
          sizes="50%"
          className="object-cover rounded-3xl z-10  group-hover:scale-110 transition-all duration-300 "
        />
      </div>
      <div className="border  dark:border-gray-300/30 px-4 pt-12 pb-6 rounded-b-3xl  -translate-y-8 max-w-xl group-hover:border-primary transition-all duration-300">
        <h5 className="text-xl text-center mb-4 group-hover:text-primary transition-all duration-300">{hobbie}</h5>
      </div>
    </div>
  );
};

export default CardHobbies;