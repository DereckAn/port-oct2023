import { blogs } from "@/assets/constants";
import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

interface BlogDetailsProps {
  params: { details: number };
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
  const id = params.details - 1;

  return (
    <main className="py-10 border-b border-gray-500/30">
      <Container>
        <Badge label={blogs[id].category} className="text-primary" />
        <Title title={blogs[id].title} className="mt-0 mb-10 " />
        <article className="space-y-10">
          <div className="relative w-full h-[500px] rounded-xl ">
            <Image
              src={blogs[id].image}
              fill
              className="object-cover rounded-xl"
              alt={"asdfa"}
            />
          </div>
          <p className="text-gray-500">{blogs[id].descriptions[0]}</p>
          <h3 className="text-white text-2xl">{blogs[id].subtitles[0]}</h3>
          <p className="text-gray-500">{blogs[id].descriptions[1]}</p>
          <h5 className="text-white text-xl">{blogs[id].subtitles[1]}</h5>
          <ul className="text-gray-500 list-decimal space-y-5 ml-4">
            {blogs[id].lista.map((blog) => (
              <li key={blog}>{blog}</li>
            ))}
          </ul>
          <div className="relative w-full h-[500px] rounded-xl ">
            <Image
              src={blogs[id].images[0]}
              fill
              className="object-cover rounded-xl"
              alt={"asdfa"}
            />
          </div>
        </article>
        <div className="w-full pt-7 ">
          <a
            href={blogs[id].href}
            target="_blank"
            className="py-3 px-4 flex items-center justify-center border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 rounded-lg font-medium w-full cursor-pointer"
          >
            View Code
          </a>
        </div>
      </Container>
    </main>
  );
};

export default BlogDetails;
