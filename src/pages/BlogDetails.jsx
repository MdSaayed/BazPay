import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import Title from "../components/title/Title";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog details based on ID
  useEffect(() => {
    // Ensure `id` is a valid number
    if (!id || isNaN(id)) {
      setError("Invalid blog ID");
      setLoading(false);
      return;
    }

    fetch("/blogData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog data");
        return res.json();
      })
      .then((data) => {
        const foundBlog = data.find((item) => item.id === parseInt(id, 10)); // Find the blog by ID
        if (!foundBlog) throw new Error("Blog not found");
        setBlog(foundBlog);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  
  // Show loading animation while data is being fetched
  if (loading) return <LoadingAnimation />;
  // Display error message if data fetch fails
  if (error)  return  <ErrorMessage error={error} />

  return (
    <section className="bg-lightGrayishWhite py-24">
      <div className="container">
        {/* Blog Meta Information */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="text-davyGray text-base font-normal px-2 py-1 rounded-lg bg-whiteSmoke">
            {blog?.category || "Uncategorized"}
          </span>
          <span className="text-davyGray text-base font-normal px-2 py-1 rounded-lg bg-whiteSmoke">
            {blog?.date || "Unknown Date"}
          </span>
        </div>

        {/* Blog Title */}
        { 
          blog?.title && <div className="mb-20">
            <Title title={blog?.title} textAlign="text-left" />
          </div>
        }

        {/* Blog Image */}
        {
          (blog?.detail_image || blog?.image) && <figure className="mb-16">
            <img
              src={blog?.detail_image || blog?.image}
              alt={blog?.title}
              className="w-full rounded-lg shadow-md"
            />
          </figure>
        }

        {/* Blog Description */}
        {
          blog?.content && <article className="prose text-davyGray text-base">
            <p>{blog?.content}</p>
          </article>
        }
      </div>
    </section>
  );
};

export default BlogDetails;
