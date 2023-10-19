'use client';

import { blogs } from "@/assets/constants";
import Button from "@/components/ui/button";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"
import { useRouter } from "next/navigation";

const BlogSection = () => {

    const router = useRouter();
    return ( 
        <section id={"featuredWork"} className="border-b border-gray-500/30">
            <Container>
                <Title title={"Blog"} />
                <div className="space-y-5">
                    {blogs.map((blog) => (
                        <CardBlog key={blog.title}{...blog}/>))}
                </div>
                <Button label="View All Posts" onClick={()=>router.push('/work')}/>

            </Container>
        </section>
     );
}
 
export default BlogSection;