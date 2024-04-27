import { Blog } from "@/types"

export  const createBlogs = async(data: Blog) => {
    const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store",
        body: JSON.stringify(data)
    })
    const createBlog = await res.json()
    return createBlog
}