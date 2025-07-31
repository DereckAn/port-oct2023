import { blogs } from "@/assets/constants";
import CardBlog from "./card-blog";

interface ListBlogProps {
  number?: number;
}

const ListBlog = ({ number }: ListBlogProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {blogs.slice(0, number ?? blogs.length).map((blog) => (
        <CardBlog key={blog.title} {...blog} />
      ))}
    </div>
  );
};

export default ListBlog;
