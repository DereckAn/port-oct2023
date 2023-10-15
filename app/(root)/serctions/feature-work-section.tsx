'use client';

import { feacturedWork } from "@/assets/constants";
import Button from "@/components/ui/button";
import CardFeatured from "@/components/ui/card-feature";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation"; // note: cuando usemos next/navigation tenemos que poner 'use client' en la primera linea

const FeactuWorkSection = () => {
    const router = useRouter();

    return ( 
        <section id={"featuredWork"} className="border-b border-gray-500/30">
            <Container>
                <Title title={"Featured Work"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                    {feacturedWork.map((item) => <CardFeatured key={item.title} {...item} />)}
                </div>  
                <Button label="View All Projects" onClick={()=>router.push('/work')}/>
            </Container>
        </section>
     );
}
    
export default FeactuWorkSection;