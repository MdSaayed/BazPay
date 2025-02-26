import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500 mt-5">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500 mt-5">Error: {error}</p>;

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
