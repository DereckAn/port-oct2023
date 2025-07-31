import { ventures } from "@/assets/constants";
import { cn } from "@/libs/utils";
import CardVentures from "./card-ventires";

interface ListVenturesProps {
  className?: string;
  number?: number;
}

const ListVentures = ({ className, number }: ListVenturesProps) => {
  return (
    <div className={cn("grid grid-cols-1  gap-10 ", className)}>
      {ventures.slice(0, number ?? ventures.length).map((item) => (
        <CardVentures key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ListVentures;
