"use client";
import { cerdo } from "@/assets/images";
import SliderItem from "@/components/ui/slider-item";
import { useState } from "react";

const PhotoPage = () => {
  const [itemActivo, setItemActivo] = useState<number>(0);
  const countItems = 5;
  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem
          itemActivo={itemActivo}
          id={1}
          image={cerdo}
          brand="cerdo"
          name="Pato"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quam nihil a reprehenderit, dicta ullam id nulla cumque est. Modi
          voluptatibus delectus et illo necessitatibus repudiandae alias
          perspiciatis voluptate commodi."
        />
      </ul>
    </div>
  );
};

export default PhotoPage;
