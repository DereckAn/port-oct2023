import { blogs } from "@/assets/constants";
import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image, { StaticImageData } from "next/image";

interface BlogDetailsProps {
  params: { details: string };
}

function findByTitle(titulo: string) {
  return blogs.find((item) => item.title === titulo);
}

const ImageComponent = ({src, alt}: {src: StaticImageData, alt: string}) => (
  <div className="relative w-full h-[500px] rounded-xl ">
    <Image
      src={src}
      fill
      className="object-cover rounded-xl"
      alt={alt}
      placeholder = 'blur'
      loading = 'lazy'
      priority={false}
    />
  </div>
)

const BlogDetails = ({ params }: BlogDetailsProps | any) => {
  const decodedTitle = decodeURIComponent(params.details);
  const item = findByTitle(decodedTitle);

  if (!item) {
    return <div>No se encontró el {params.details}</div>;
  }

  return (
    <main className="py-10 border-b border-gray-500/30">
      <Container>
        <Badge label={item.category} className="text-primary" />
        <Title title={item.title} className="mt-0 mb-10 " />
        <article className="space-y-10">
          <ImageComponent src={item.image} alt={item.title} />
          <p className="text-gray-500">{item.descriptions[0]}</p>
          <h3 className="text-white text-2xl">{item.subtitles[0]}</h3>
          <p className="text-gray-500">{item.descriptions[1]}</p>
          <h5 className="text-white text-xl">{item.subtitles[1]}</h5>
          <ul className="text-gray-500 list-decimal space-y-5 ml-4">
            {item.lista.map((blog, index) => (
              <li key={item.lista[index]}>{blog}</li>
            ))}
          </ul>
          <ImageComponent src={item.images[0]} alt={item.title} />
        </article>
        <div className="w-full pt-7 ">
          <a
            href={item.href}
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