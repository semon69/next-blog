import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
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
      <div className="grid grid-cols-3 gap-6 mt-10">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
