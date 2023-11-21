"use client";

import { usePathname } from "next/navigation";
import SectionHeader from "./sections/seection-header";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import { featureworkpagefull } from "@/assets/constants";

const CardDetailsPage = ( ) => {
  const router = usePathname();
  const lastChar = router[router.length - 1];
  const id = parseInt(lastChar)-1;

  return (
    <>
      <SectionHeader
        description={featureworkpagefull[id].description}
        details={featureworkpagefull[id].details}
        imageT={featureworkpagefull[id].imageT}
        link="/"
        title={featureworkpagefull[id].title}
      />
      <SectionMyRole
        imageR={featureworkpagefull[id].imageR}
        responsabiliteies={featureworkpagefull[id].responsabiliteies}
        technologies={featureworkpagefull[id].technologies}
      />
      <SectionTheProject
        challenge={featureworkpagefull[id].challenge}
        imageBL={featureworkpagefull[id].imageBL}
        imageBR={featureworkpagefull[id].imageBR}
        imageP={featureworkpagefull[id].imageP}
        outcome={featureworkpagefull[id].outcome}
      />
    </>
  );
};

export default CardDetailsPage;
