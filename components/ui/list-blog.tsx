import { blogs } from "@/assets/constants";
import CardBlog from "./card-blog";

const ListBlog = () => {
  return (
    <div className="space-y-5">
      {blogs.map((blog) => (
        <CardBlog key={blog.title} {...blog} />
      ))}
    </div>
  );
};

export default ListBlog;
