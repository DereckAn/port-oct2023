import { featureworkpagefull } from "@/assets/constants";
import CardFeatured from "./card-feature";

interface ListFeaturedWorkProps {
  number?: number;
}

const ListFeaturedWork = ({ number }: ListFeaturedWorkProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {featureworkpagefull
        .slice(0, number ?? featureworkpagefull.length)
        .map((item) => (
          <CardFeatured key={item.href} {...item} />
        ))}
    </div>
  );
};

export default ListFeaturedWork;
