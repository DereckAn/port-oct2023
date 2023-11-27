import Container from "@/components/ui/container";
import ListFeaturedWork from "@/components/ui/list-featured-work";
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
