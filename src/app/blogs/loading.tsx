import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      {/* <h1>Loading........</h1> */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {blogs?.map((blog: Blog) => (
          <LoadingCard key={blog?.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
