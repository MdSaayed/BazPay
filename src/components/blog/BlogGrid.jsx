import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadingAnimation from './../loadingAnimation/LoadingAnimation';
import Reveal from "../../animation/Reveal";
import { useLoading } from "../../context/LoadingContext";

const BlogGrid = () => {
  // State to hold the blog data, loading state, and any errors
  const [blogs, setBlogs] = useState([]);
  const { isLoading, startLoading, stopLoading } = useLoading(); // State to manage loading state
  const [error, setError] = useState(null);

  // useEffect to fetch blog data when the component mounts
  useEffect(() => {
    startLoading();

    const fetchBlogs = async () => {
      try {
        // Fetch the blog data from the JSON file
        const res = await fetch("/latestPost.json");
        if (!res.ok) {
          // If the fetch failed, throw an error
          throw new Error("Failed to fetch blogs");
        }
        // Parse the JSON data and update the state
        const data = await res.json();
        setBlogs(data); // Show only two post
        stopLoading();
      } catch (err) {
        // If an error occurs during fetch, update the error state
        setError(err?.message);
        stopLoading();
      }
    };

    // Call the async function to fetch the blogs
    fetchBlogs();
  }, []); // Empty dependency array means this runs only once when the component mounts



  // If loading, show a loading message
  if (isLoading) return <LoadingAnimation />;
  // If there's an error, display the error message
  if (error) return <ErrorMessage />;

  // Render the blog cards once the data is fetched
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map over the blogs and render a BlogCard for each one */}
        {blogs?.slice(0, 2)?.map((blog, index) => (
          <Reveal key={blog?.id}>
            <BlogCard blog={blog} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
