"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import ListBlog from "@/components/ui/list-blog";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const router = useRouter();
  return (
    <section id={"Blog Section"} className="border-b border-gray-500/30">
      <Container>
        <Title title={"Blog"} />
        <ListBlog number={3}/>
        <Button label="View All Posts" onClick={() => router.push("/blog")} />
      </Container>
    </section>
  );
};

export default BlogSection;
