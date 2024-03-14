"use client";
import Arrows from "@/components/ui/arrows";
import SliderItem from "@/components/ui/slider-item";
import SliderThumbnail from "@/components/ui/slider-tumbnail";
import { useState } from "react";
import { photos } from "@/assets/constants";


const PhotoPage = () => {
  const [itemActivo, setItemActivo] = useState<number>(1);
  const countItems = photos.length;

  const handleNext = () => {
    setItemActivo((prev) => (prev === countItems ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setItemActivo((prev) => (prev === 1 ? countItems : prev - 1));
  };

  return (
    <div className="h-screen relative">
      <ul>
        {photos.map((photo) => (
          <SliderItem
            key={photo.id}
            itemActivo={itemActivo}
            id={photo.id}
            image={photo.image}
            brand={photo.brand}
            name={photo.name}
            description={photo.description}
          />
        ))}
      </ul>
      <Arrows handlePrev={handlePrev} handleNext={handleNext} />
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[150px] px-14 overflow-y-hidden overflow-x-auto ">
        {photos.map((photo) => (
          <SliderThumbnail
            key={photo.id}
            id={photo.id}
            image={photo.image}
            name={photo.name}
            onClick={() => setItemActivo(photo.id)}
            itemActivo={itemActivo}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoPage;