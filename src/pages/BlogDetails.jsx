import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import Title from "../components/title/Title";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Reveal from "../animation/Reveal";
import { useLoading } from "../context/LoadingContext";

const BlogDetails = () => {
  const blog = useLoaderData(); // Get data from the loader
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [error, setError] = useState(null); // State to handle errors

  
    
  useEffect(() => {
    startLoading();

    // Simulating a loading state based on the fetched data (mocked here)
    if (blog) {
      stopLoading(); // Set loading to false when data is available
    } else {
      setError("Failed to load data.");
      stopLoading(); // Stop loading even in case of error
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



  if (isLoading) return <LoadingAnimation />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-10 lg:py-24">
        {/* Blog Meta Information */}
        <article >
          <Reveal>
            <div className="flex justify-center flex-wrap gap-4 mb-6">
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
            </div>
          </Reveal>

          {/* Blog Title */}
          {title && (
            <div className="mb-20">
              <Title title={title} textAlign="text-center" />
            </div>
          )}

          {/* Blog Image */}
          {(detail_image || image) && (
            <Reveal>
              <figure className="mb-16">
                <img
                  src={detail_image || image}
                  alt={title}
                  className="max-w-full max-h-[497px] mx-auto object-contain rounded-3xl shadow-sm"
                />
              </figure>
            </Reveal>
          )}

          {/* Blog Description */}
          {content && (
            <Reveal>
                <p className="prose text-davyGray text-base px-0 lg:px-40">{content}</p>
            </Reveal>
          )}
        </article>
      </div>
    </section>
  );
};

export default BlogDetails;
