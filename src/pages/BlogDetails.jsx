import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import Title from "../components/title/Title";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Reveal from "../animation/Reveal";

const BlogDetails = () => {
  const blog = useLoaderData(); // Get data from the loader
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  
    
  useEffect(() => {
    // Simulating a loading state based on the fetched data (mocked here)
    if (blog) {
      setLoading(false); // Set loading to false when data is available
    } else {
      setError("Failed to load data.");
      setLoading(false); // Stop loading even in case of error
    }
  }, [blog]);

  // Destructure values from blog object
  const {
    title,
    category,
    date,
    detail_image,
    image,
    content,
  } = blog;


  if(loading) return <LoadingAnimation />;
  if (!blog) return <ErrorMessage error={error} />;

  return (
    <section className="bg-lightGrayishWhite py-24">
      <div className="container">
        {/* Blog Meta Information */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Reveal>
                {category && (
                  <span className="text-davyGray text-base font-normal px-2 py-1 rounded-lg bg-whiteSmoke">
                    {category}
                  </span>
                )}
                {date && (
                  <span className="text-davyGray text-base font-normal px-2 py-1 rounded-lg bg-whiteSmoke">
                    {date}
                  </span>
                )}
            </Reveal>
          </div>

        {/* Blog Title */}
        {title && (
          <div className="mb-20">
            <Title title={title} textAlign="text-left" />
          </div>
        )}

        {/* Blog Image */}
        {(detail_image || image) && (
          <Reveal>
            <figure className="mb-16">
              <img
                src={detail_image || image}
                alt={title}
                className="w-full rounded-lg shadow-md"
              />
            </figure>
          </Reveal>
        )}

        {/* Blog Description */}
        {content && (
          <Reveal>
            <article className="prose text-davyGray text-base">
              <p>{content}</p>
            </article>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default BlogDetails;
