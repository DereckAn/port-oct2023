import Image from "next/image";
import { smile2 } from "@/assets/index";
import ButtonSolcialMedia from "@/components/ui/button-social-media";
import { information } from "@/assets/constants";
import Container from "@/components/ui/container";
import ScrollingComponent from "@/components/ui/tecnologies-section";

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 pb-10">
      <Container>
        <div className="space-y-10 mb-10">
          <div className="relative w-24 h-24 ">
            <Image
              src={smile2}
              alt="Image de yo"
              fill
              className="object-cover rounded-xl grayscale"
            />
          </div>
          {/* // note: max-w-3xl es para que el texto no se salga de la pantalla */}
          <div className="max-w-3xl">
            <h1 className="text-4xl  text-white mb-5">{information.titulo}</h1>
            <p className="text-gray-500 ">{information.description}</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex items-center gap-3 ">
              {information.socialmedia.map((item) => (
                <ButtonSolcialMedia key={item.href} {...item} />
              ))}
              {/* {socialMedia.map((item) => <ButtonSolcialMedia key={item.href} href={item.href}  icon={item.icon}/>)} // note: podemos cambiar como hacemos el map. forma larga y forma corta*/}
            </div>
            <a
              href="/portafolio_oct_2023/assets/constants.tsx" download={true}
              className="border-2 mr-10 rounded-lg text-xl  py-2 px-5 transition-colors duration-300 blinking"
            >
              Resume
            </a>
          </div>
        </div>
        <ScrollingComponent />
      </Container>
    </section>
  );
};

export default HeroSection;
