import type { Metadata } from "next";
import CardDetailsPage from "./carddetails";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Work Details",
};

const DetailsWorkPage = () => {
  return (
    <main>
      <CardDetailsPage />
    </main>
  );
};

export default DetailsWorkPage;

