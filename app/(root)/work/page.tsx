import Container from "@/components/ui/container";
import ListFeaturedWork from "@/components/ui/list-featured-work";
import Title from "@/components/ui/title";
import { getMarkdownFiles } from "@/utils/projects";

export default async function WorkPage() {
  const projects = await getMarkdownFiles();

  return (
    <Container>
      <Title title={"Work"} />
      <ListFeaturedWork projects={projects} />
    </Container>
  );
}
