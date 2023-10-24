import { cerdo } from "@/assets";
import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const BlogDetails = () => {
    return ( 
        <Container>
            <Badge label={"Blog"}  className="text-primary"/>
            <Title title={"Poner bluetooth a tu celular " } className="mt-0 mb-10 " />
            <h1>Blog Details</h1>
            <div  className="relative w-full h-[500px] rounded-xl">
                <Image src={cerdo} fill className="object-cover rounded-xl" alt={"asdfa"} />
            </div>
        </Container>
     );
}
 
export default BlogDetails;