import { cerdo } from "@/assets";
import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <main className="py-10 border-b border-gray-500/30">
      <Container>
        <Badge label={"Design"} className="text-primary" />
        <Title
          title={"Poner bluetooth a tu celular "}
          className="mt-0 mb-10 "
        />
        <article className="space-y-10">
          <div className="relative w-full h-[500px] rounded-xl ">
            <Image
              src={cerdo}
              fill
              className="object-cover rounded-xl"
              alt={"asdfa"}
            />
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quisquam nihil rem iure ab natus nobis fugiat odit? Dicta animi
            molestiae in impedit mollitia quis repellendus consectetur
            recusandae? Repellendus, ducimus!
          </p>
          <h3 className="text-white text-2xl">Un titulo random</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quisquam nihil rem iure ab natus nobis fugiat odit? Dicta animi
            molestiae in impedit mollitia quis repellendus consectetur
            recusandae? Repellendus, ducimus!
          </p>
          <h5 className="text-white text-xl">Un titulo random</h5>
          <ul className="text-gray-500 list-decimal space-y-5 ml-4">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, quidem totam autem ea suscipit, aliquam molestias vero
              non porro dolorem a consectetur inventore sed corporis ducimus
              deserunt velit nobis dignissimos.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, quidem totam autem ea suscipit, aliquam molestias vero
              non porro dolorem a consectetur inventore sed corporis ducimus
              deserunt velit nobis dignissimos.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, quidem totam autem ea suscipit, aliquam molestias vero
              non porro dolorem a consectetur inventore sed corporis ducimus
              deserunt velit nobis dignissimos.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, quidem totam autem ea suscipit, aliquam molestias vero
              non porro dolorem a consectetur inventore sed corporis ducimus
              deserunt velit nobis dignissimos.
            </li>
          </ul>
          <div className="relative w-full h-[500px] rounded-xl ">
            <Image
              src={cerdo}
              fill
              className="object-cover rounded-xl"
              alt={"asdfa"}
            />
          </div>
        </article>
      </Container>
    </main>
  );
};

export default BlogDetails;
