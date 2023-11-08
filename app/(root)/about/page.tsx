import { smile2 } from "@/assets/images";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30">
      <Container>
        <Title title="About ME" />
        <div className="relative w-full h-[500px] rounded-xl ">
          <Image
            src={smile2}
            fill
            className="object-cover rounded-xl"
            alt={"asdfa"}
          />
        </div>
        <div className="mt-10 space-y-10">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque doloribus voluptas? Quisquam
            voluptatum, quibusdam, quae, molestiae, quos voluptates consequuntur
            voluptatem voluptatibus doloremque
          </p>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
