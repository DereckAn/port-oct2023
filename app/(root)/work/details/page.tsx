
import type { Metadata } from "next";
import SectionMyRole from "./sections/section-my-role";
import SectionHeader from "./sections/seection-header";


export const metadata: Metadata = {
    title: "Work Details",
    description: "Work Details",
  };
  

const DetailsWorkPage = () => {
  return (
    <main>
      <SectionHeader />
      <SectionMyRole />
    </main>
  );
};

export default DetailsWorkPage;
