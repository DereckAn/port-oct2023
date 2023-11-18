// 'use client';
import type { Metadata } from "next";
import SectionMyRole from "./sections/section-my-role";
import SectionHeader from "./sections/seection-header";
import SectionTheProject from "./sections/section-the-project";
import { featureworkpagefull } from "@/assets/constants";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

const DetailsWorkPage = () => {
  return (
    <main>
      <SectionHeader
        description={featureworkpagefull[0].description}
        details={featureworkpagefull[0].details}
        imageT={featureworkpagefull[0].imageT}
        link="/"
        title={featureworkpagefull[0].title}
      />
      <SectionMyRole
        imageR={featureworkpagefull[0].imageR}
        responsabiliteies={featureworkpagefull[0].responsabiliteies}
        technologies={featureworkpagefull[0].technologies}
      />
      <SectionTheProject
        challenge={featureworkpagefull[0].challenge}
        imageBL={featureworkpagefull[0].imageBL}
        imageBR={featureworkpagefull[0].imageBR}
        imageP={featureworkpagefull[0].imageP}
        outcome={featureworkpagefull[0].outcome}
      />
    </main>
  );
};

export default DetailsWorkPage;

//app\(root)\work\[details]\page.tsx
