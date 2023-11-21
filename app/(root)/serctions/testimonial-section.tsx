import { testimonials } from "@/assets/constants";
import CardTestimonials from "@/components/ui/card-testimonials";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const TestimonialSection = () => {
  return (
    <section id={"Testimonials"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Hobbies"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((item) => (
            <CardTestimonials key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
