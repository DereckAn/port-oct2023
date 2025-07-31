import Container from "@/components/ui/container";
import ListVentures from "@/components/ui/list-ventures";
import Title from "@/components/ui/title";

const VenturesPage = () => {
  return (
    <main className="border-b border-gray-500/30">
      <Container>
        <Title title="Jobs" />
      </Container>
      <hr className="border-gray-500/30" />
      <Container className="py-10">
        <ListVentures className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"/>
      </Container>
    </main>
  );
};

export default VenturesPage;
