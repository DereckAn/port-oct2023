import { featureworkpagefull } from "@/assets/constants";
import SectionMyRole from "./sections/section-my-role";
import SectionTheProject from "./sections/section-the-project";
import SectionHeader from "./sections/seection-header";

interface CardDetailsPageProps {
  tittle: string;
}

function findIndexByTitle(titulo: string) {
  // const dee = decodeURIComponent(titulo.split("/").pop() || "");
  for (let i = 0; i < featureworkpagefull.length; i++) {
    if (featureworkpagefull[i].title === `/work/${titulo}`) {
      return i;
    }
  }
  return -1; // Retorna -1 si no encuentra el título
}

const CardDetailsPage = ({ tittle }: CardDetailsPageProps) => {
  const de = findIndexByTitle(tittle);
  // const de = tittle - 1;

  if (de === -1) {
    return <div>No se encontró el título {tittle}</div>;
  }

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
