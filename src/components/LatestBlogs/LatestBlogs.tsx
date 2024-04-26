import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto my-6">
      <h1 className="text-4xl text-center my-3">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl w-2/4 mx-auto text-center text-gray-500">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {blogs.slice(0,2).map((blog) => (
          <LatestBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 my-10">
        {blogs.slice(2,5).map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
