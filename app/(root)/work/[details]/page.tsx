import type { Metadata } from "next";
import CardDetailsPage from "./carddetails";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

interface DetailsWorkPageProps {
  params: {details: string}
};

const DetailsWorkPage = ({params} : DetailsWorkPageProps)  => {
  return (
    <main>
      <CardDetailsPage tittle={params.details}/>
    </main>
  );
};

export default DetailsWorkPage;

