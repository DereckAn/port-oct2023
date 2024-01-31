import { cn } from "@/libs/utils";
import Image, { StaticImageData } from "next/image";

interface SliderItemProps {
  itemActivo: number;
  id: number;
  image: StaticImageData;
  brand: string;
  name: string;
  description: string;
}

const SliderItem = ({
  itemActivo,
  id,
  image,
  brand,
  name,
  description,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500",
        itemActivo === id ? "z-10 opacity-100" : "opacity-0"
      )}
    >
      <div className="realtive w-full h-full ">
        <Image src={image} fill className="object-cover" alt="Image" />
      </div>
      <div className="spcae-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10">
        <p
          className={cn(
            "uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 ", 
            itemActivo === id && "animate-show-content"
          )}
        >
          {brand}
        </p>
        <h2
          className={cn(
            "text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0 animation-delay-4",
            itemActivo === id && "animate-show-content"
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "text-gray-200 translate-y-[30px] blur-[20px] opacity-0 animation-delay-5", 
            itemActivo === id && "animate-show-content"
          )}
        >
          {description}
        </p>
      </div>
    </li>
  );
};

export default SliderItem;
