import { ventures } from "@/assets/constants";
import CardVentures from "@/components/ui/card-ventires";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const VentureSection = () => {
  return (
    <section id={"Testimonials"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Ventures "} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {ventures.map((venture) => (
                <CardVentures key={venture.title} {...venture} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default VentureSection;
