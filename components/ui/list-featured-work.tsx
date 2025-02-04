import { MarkdownData } from "@/utils/projects";
import CardFeatured from "./card-feature";

interface ListFeaturedWorkProps {
  number?: number;
  projects?: MarkdownData[];
}

const ListFeaturedWork = ({ number, projects }: ListFeaturedWorkProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {projects?.slice(0, number ?? projects.length).map((item) => (
        <CardFeatured project={item} key={item.title || Math.random().toString()} />
      ))}
    </div>
  );
};

export default ListFeaturedWork;
