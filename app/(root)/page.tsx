import BlogSection from "./serctions/blog-section";
import FeactuWorkSection from "./serctions/feature-work-section";
import HeroSection from "./serctions/hero-sections";
import TestimonialSection from "./serctions/testimonial-section";
import VentureSection from "./serctions/venture-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeactuWorkSection />
      <VentureSection />
      <BlogSection />
      <TestimonialSection />
    </>
  );
}
