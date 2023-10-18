import Container from "@/components/ui/container";
import Title from "@/components/ui/title"

const BlogSection = () => {
    return ( 
        <section id={"featuredWork"} className="border-b border-gray-500/30">
            <Container>
                <Title title={"Blog"} />
            </Container>
        </section>
     );
}
 
export default BlogSection;