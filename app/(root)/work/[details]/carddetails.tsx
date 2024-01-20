'use client';
import { featureworkpagefull } from "@/assets/constants";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import SectionHeader from "./sections/seection-header";
import ReadmeFile from "@/hooks/fetchReadme";

interface CardDetailsPageProps {
  details: number;
}

export const ReadmeLinks = [
  {
    name: "Portafolio",
    link:
      "https://api.github.com/repos/DereckAn/port-oct2023/contents/README.md",
  },
  {
    name: "Image to code",
    link: "https://api.github.com/repos/DereckAn/ima2code/contents/README.md",
  },
  {
    name: "Games App",
    link: "https://api.github.com/repos/DereckAn/games_app/contents/README.md",
  },
];


// Ahora puedes usar 'portfolioText', 'myRoleText' y 'projectText' en tus componentes de Next.js

const CardDetailsPage = ({ details }: CardDetailsPageProps) => {
  const de = details - 1;
  const { portfolioText, myRoleText, projectText } = ReadmeFile();

  return (
    <>
    {/* <p>{portfolioText}</p> */}
    {/* <p>{myRoleText}</p> */}
    {/* <p>{projectText}</p> */}

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
