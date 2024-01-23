import { me2 } from "@/assets/images";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30 ">
      <Container>
        <Title title="About ME" />
        <div className=" flex flex-col  xl:flex-row md:justify-center">
          <div className="relative w-full h-[600px] rounded-xl xl:max-w-xl">
            <Image
              src={me2}
              fill
              className="object-cover rounded-xl"
              alt={"asdfa"}
              style={{ objectPosition: "top center" }}
              priority={true}
              placeholder="blur"
              sizes="100%"
            />
          </div>
          <div className="mt-10 space-y-6  xl:px-10 xl:max-w-xl ">
            <p className="text-gray-500 ">
              Hi, my name is Dereck Angeles. I currently live in Utah, and I
              have a great passion for technology, programming, photography and
              piano. 
            </p>
            <p className="text-gray-500 ">
              In my free time, I enjoy going out to take pictures, practice
              piano, or go swimming. I like to work in a team because I always I
              always learn something new from others. I consider myself to be a
              peaceful person and I believe that the best way to solve problems
              is by talking.
            </p>
            <h2 className="text-gray-500 text-3xl">
              Education:
            </h2>
            <p className="text-gray-500 ">
              I am currently enrolled in a Bachelors in Computer Science at
              Ensign College, also pursuing certificates in software engineering
              and computer science.
            </p>
            <h2 className="text-gray-500 text-3xl">
              Certificates:
            </h2>
            <p className="text-gray-500 ">
              I am currently enrolled in a Bachelors in Computer Science at
              Ensign College, also pursuing certificates in software engineering
              and computer science.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
