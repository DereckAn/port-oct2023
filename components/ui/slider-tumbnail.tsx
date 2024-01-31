import { cn } from "@/libs/utils";
import Image, { StaticImageData } from "next/image";

interface SliderThumbnailProps {
  itemActivo: number;
  id: number;
  image: StaticImageData;
  name: string;
  onClick: () => void;
}

const SliderThumbnail = ({
  itemActivo,
  id,
  image,
  name,
  onClick,
}: SliderThumbnailProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className={cn(
        `h-[150px] shrink-0 transition-all duration-300 overflow-hidden relative 
        after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150`,
        itemActivo === id
          ? "w-[200px] brightness-150"
          : "w-[50px] brightness-50"
      )}
    >
      <div className="relative w-full h-full rounded-lg">
        <Image
          src={image}
          fill
          className="object-cover rounded-lg"
          alt="Thumbnail"
        />
      </div>
      <div
        className={cn(
          "absolute top-auto right-[10px] bottom-[28px] left-[10px] z-10  translate-y-[30px] blur[20px] opacity-0 animation-delay-3 ",
          itemActivo === id && "animate-show-content"
        )}
      >
        <h2 className="  line-clamp-1 font-bold text-start ">{name}</h2>
      </div>
    </li>
  );
};

export default SliderThumbnail;
