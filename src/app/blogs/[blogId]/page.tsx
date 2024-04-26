import BlogDetails from "@/components/ui/BlogDetails";

type BlogId ={
  params: {
    blogId: string
  }
}

const BlogDetailsPage = async({params}: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params?.blogId}`, {
    next: {
      revalidate: 20
    }
  })
  const blog = await res.json()
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;