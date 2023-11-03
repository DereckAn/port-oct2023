import { feacturedWork } from "@/assets/constants";
import CardFeatured from "./ui/card-feature";

interface ListFeaturedWorkProps {
  number?: number;
}

const ListFeaturedWork = ({number} : ListFeaturedWorkProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {feacturedWork.slice(0, number ?? feacturedWork.length).map((item) => (
        <CardFeatured key={item.href} hola={item} />
      ))}
    </div>
  );
};

export default ListFeaturedWork;
