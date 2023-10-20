import ListFeaturedWork from "@/components/list-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const WorkPage = () => {


  return (
    <Container>
      <Title title={"Work"} />
      {/* // note lo hice componente porque lo voy a usar en la pagina de work */}
      <ListFeaturedWork />
    </Container>
  );
};

export default WorkPage;
