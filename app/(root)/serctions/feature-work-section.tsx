import { feacturedWork } from "@/assets/constants";
import CardFeatured from "@/components/ui/card-feature";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const FeactuWorkSection = () => {
    return ( 
        <section id={"featuredWork"}>
            <Container>
                <Title title={"Featured Work"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {feacturedWork.map((item) => <CardFeatured key={item.title} {...item} />)}
                </div>
            </Container>
        </section>
     );
}
 
export default FeactuWorkSection;