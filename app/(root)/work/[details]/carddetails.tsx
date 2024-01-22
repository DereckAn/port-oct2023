import { featureworkpagefull } from "@/assets/constants";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import SectionHeader from "./sections/seection-header";

interface CardDetailsPageProps {
  tittle: string;
}

function findByTitle(titulo: string) {
  return featureworkpagefull.find(item => item.title === titulo);
}

const CardDetailsPage = ({ tittle }: CardDetailsPageProps) => {
  const decodedTitle = decodeURIComponent(tittle);
  const item = findByTitle(decodedTitle);

  if (!item) {
    return (
      <div>
        No se encontró el {tittle}
      </div>
    );
  }

  return (
    <>
      <SectionHeader
        description={item.description}
        details={item.details}
        imageT={item.imageC}
        href={item.href}
        title={item.title}
      />
      <SectionMyRole
        imageR={item.imageR}
        responsabiliteies={item.responsabiliteies}
        technologies={item.technologies}
      />
      <SectionTheProject
        challenge={item.challenge}
        imageBL={item.imageBL}
        imageBR={item.imageBR}
        imageP={item.imageP}
        outcome={item.outcome}
      />
    </>
  );
};

export default CardDetailsPage;