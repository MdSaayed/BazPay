import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadingAnimation from './../loadingAnimation/LoadingAnimation';
import Reveal from "../../animation/Reveal";

const BlogGrid = () => {
  // State to hold the blog data, loading state, and any errors
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch blog data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch the blog data from the JSON file
        const res = await fetch("/blogData.json");
        if (!res.ok) {
          // If the fetch failed, throw an error
          throw new Error("Failed to fetch blogs");
        }
        // Parse the JSON data and update the state
        const data = await res.json();
        setBlogs(data); // Show only two post
        setLoading(false);
      } catch (err) {
        // If an error occurs during fetch, update the error state
        setError(err?.message);
        setLoading(false);
      }
    };

    // Call the async function to fetch the blogs
    fetchBlogs();
  }, []); // Empty dependency array means this runs only once when the component mounts


  
  // If loading, show a loading message
  if (loading)  return <LoadingAnimation />;
  // If there's an error, display the error message
  if (error) return <ErrorMessage />; 

  // Render the blog cards once the data is fetched
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map over the blogs and render a BlogCard for each one */}
        {blogs?.slice(0, 2)?.map((blog) => (
          <Reveal key={blog?.id}>
            <BlogCard blog={blog} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
