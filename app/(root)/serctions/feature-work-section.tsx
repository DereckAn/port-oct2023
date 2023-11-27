"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import ListFeaturedWork from "@/components/ui/list-featured-work";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation"; // note: cuando usemos next/navigation tenemos que poner 'use client' en la primera linea

const FeactuWorkSection = () => {
  const router = useRouter();

  return (
    <section id={"featuredWork"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Featured Work"} />
        {/* // note lo hice componente porque lo voy a usar en la pagina de work */}
        <ListFeaturedWork number={3} />
        <Button
          label="View All Projects"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default FeactuWorkSection;
