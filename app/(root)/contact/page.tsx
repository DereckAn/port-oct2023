import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import FormContactMe from "./components/form";

const ContactPage = () => {
  return (
    <main className="border-b border-gray-500/30 pb-10">
      <Container>
        <Title title="Let's Chat" />
        <p className="text-gray-500 mb-10">
          If you&rsquo;d like to talk about a project of just say hi, send me a
          message or email me at{" "}
          <span className="text-primary"> dereck1998angeles@gmail.com </span>
        </p>
        <FormContactMe />
      </Container>
    </main>
  );
};

export default ContactPage;
