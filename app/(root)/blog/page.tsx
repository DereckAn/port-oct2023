import Container from "@/components/ui/container";
import ListBlog from "@/components/ui/list-blog";
import Title from "@/components/ui/title";

const BlogPage = () => {
    return ( 
        <main className="border-b border-gray-500/30">
            <Container>
                <Title title={"Blog"} />
                <ListBlog />
            </Container>
        </main>
     );
}
 
export default BlogPage;