import { me2 } from "@/assets/images";
import Container from "@/components/ui/container";
import SquareList from "@/components/ui/square-list";
import Title from "@/components/ui/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30 ">
      <Container className=" pl-0 xl:pl-16 xxl:pl-0">
        <Title title="About ME" className=" " />
        <div className=" flex flex-col  xl:flex-row ">
          <div className="relative w-full h-[600px] rounded-xl xl:max-w-xl ">
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
          <div className="mt-4 space-y-6  xl:px-10 xl:max-w-xl ml-16">
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
            <h2 className="text-white text-3xl">Education:</h2>
            <p className="text-gray-500 ">
              I am currently enrolled in a Bachelors in Software Engineer at
              Ensign College, also pursuing certificates in software engineering
              and computer science.
            </p>
            <h2 className="text-white text-3xl">Certificates:</h2>

            <div className="text-gray-500 ">
              <SquareList
                details={[
                  "Udemy - Flutter and Dart",
                  "Coursera - IBM IT Support",
                  "Ensign College - Computer Science",
                  "Ensign College - Software Engineer",
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
