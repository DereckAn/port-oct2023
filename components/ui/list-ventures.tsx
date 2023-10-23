import { ventures } from "@/assets/constants";
import CardVentures from "./card-ventires";
import { cn } from "@/libs/utils";

interface ListVenturesProps {
  className?: string;
}

const ListVentures = ({className} : ListVenturesProps) => {
  return (
    <div className={cn("grid grid-cols-1  gap-10 ", className)}>
      {ventures.map((venture) => (
        <CardVentures key={venture.title} {...venture} />
      ))}
    </div>
  );
};

export default ListVentures;
