'use client';
import type { Metadata } from "next";
import SectionMyRole from "./sections/section-my-role";
import SectionHeader from "./sections/seection-header";
import SectionTheProject from "./sections/section-the-project";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { feacturedWork } from "@/assets/constants";
import { StaticImageData } from "next/image";


// export const metadata: Metadata = {
//   title: "Work Details",
//   description: "Work Details",
// };

const DetailsWorkPage = () => {
const router = useRouter();
const { details } = router.query;
const [workItem, setWorkItem] = useState<null | { title: string; category: string; image: StaticImageData; href: string; }>(null);

useEffect(() => {
    // Filter the work item from the constant array based on the details parameter
    const filteredWorkItem = feacturedWork.find((item) => item.href === details);
    if (filteredWorkItem) {
        setWorkItem(filteredWorkItem);
    }
}, [details]);

if (!workItem) {
    return <div>Loading...</div>;
}

  return (
    <main>
       <SectionHeader hola={workItem} />
      <SectionMyRole />
      <SectionTheProject/>
    </main>
  );
};

export default DetailsWorkPage;
