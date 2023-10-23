import Container from "@/components/ui/container";
import ListVentures from "@/components/ui/list-ventures";
import Title from "@/components/ui/title";

const VentureSection = () => {
  return (
    <section id={"Testimonials"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Ventures "} />
        <ListVentures className="md:grid-cols-2 lg:grid-cols-3" />
      </Container>
    </section>
  );
};

export default VentureSection;
