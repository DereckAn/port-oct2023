import SectionHeader from "./sections/seection-header";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import { featureworkpagefull } from "@/assets/constants";


interface CardDetailsPageProps {
  details: number;
};

const CardDetailsPage = ( { details } : CardDetailsPageProps) => {
  const de = (details)-1;

  return (
    <>
      <SectionHeader
        description={featureworkpagefull[de].description}
        details={featureworkpagefull[de].details}
        imageT={featureworkpagefull[de].imageC}
        href={featureworkpagefull[de].href}
        title={featureworkpagefull[de].title}
      />
      <SectionMyRole
        imageR={featureworkpagefull[de].imageR}
        responsabiliteies={featureworkpagefull[de].responsabiliteies}
        technologies={featureworkpagefull[de].technologies}
      />
      <SectionTheProject
        challenge={featureworkpagefull[de].challenge}
        imageBL={featureworkpagefull[de].imageBL}
        imageBR={featureworkpagefull[de].imageBR}
        imageP={featureworkpagefull[de].imageP}
        outcome={featureworkpagefull[de].outcome}
      />
    </>
  );
};

export default CardDetailsPage;
