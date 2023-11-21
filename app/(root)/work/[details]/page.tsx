import type { Metadata } from "next";
import CardDetailsPage from "./carddetails";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

const DetailsWorkPage = ({params}) => {
  console.log(params);
  return (
    <main>
      <CardDetailsPage />
    </main>
  );
};

export default DetailsWorkPage;

