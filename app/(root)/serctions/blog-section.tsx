import { blogs } from "@/assets/constants";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title"

const BlogSection = () => {
    return ( 
        <section id={"featuredWork"} className="border-b border-gray-500/30">
            <Container>
                <Title title={"Blog"} />
                <div className="space-y-5">
                    {blogs.map((blog) => (
                        <CardBlog key={blog.title}{...blog}/>))}
                </div>
            </Container>
        </section>
     );
}
 
export default BlogSection;