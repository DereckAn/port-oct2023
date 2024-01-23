import { testimonials } from "@/assets/constants";
import CardHobbies from "@/components/ui/card-hobbies";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const TestimonialSection = () => {
  return (
    <section id={"Testimonials"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Hobbies"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((item) => (
            <CardHobbies key={item.hobbie} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
