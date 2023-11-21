import type { Metadata } from "next";
import CardDetailsPage from "./carddetails";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

interface DetailsWorkPageProps {
  params: {details: number}
};

const DetailsWorkPage = ({params} : DetailsWorkPageProps)  => {
  return (
    <main>
      <CardDetailsPage details={params.details}/>
    </main>
  );
};

export default DetailsWorkPage;

