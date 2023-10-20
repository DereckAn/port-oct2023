import { feacturedWork } from "@/assets/constants";
import CardFeatured from "./ui/card-feature";

const ListFeaturedWork = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {feacturedWork.map((item) => (
        <CardFeatured key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ListFeaturedWork;
