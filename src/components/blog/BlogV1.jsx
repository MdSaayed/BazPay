import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react"; // Import arrow icon
import { motion } from "framer-motion"; // For animations
import Title from "../title/Title"; // Custom Title component
import Subtitle from "../subtitle/Subtitle"; // Custom Subtitle component
import { Link } from "react-router-dom"; // Link for navigation
import LoadingAnimation from "./../loadingAnimation/LoadingAnimation"; // Loading animation component
import ErrorMessage from "../errorMessage/ErrorMessage";

const BlogV1 = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls animation visibility
  const [loading, setLoading] = useState(true); // Manages loading state
  const [articles, setArticles] = useState([]); // Holds fetched articles
  const [error, setError] = useState(null); // Stores error messages

  // Trigger animation after a short delay
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Fetch blog data from a JSON file
  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Find the featured post (first post marked as "featured")
  const featuredPost = articles?.find((article) => article?.featured);

  // Get 5 other posts (excluding the featured one)
  const otherPosts = articles.filter(post => !post.featured).slice(0, 4) || [];

  // Show loading animation or error message if data isn't ready
  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorMessage error={{error}}/>;

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-20 lg:gap-4 lg:flex-row justify-between items-start lg:items-center mb-10"
        >
          <div>
            <Subtitle subTitle="Blog" borderColor="border-whiteSmoke" bg="#ECFFCD" align="justify-start" />
            <Title title="Our latest News & Resources" textAlign="text-left" maxWidth="max-w-[560px]" />
          </div>

          {/* Browse all articles button */}
          <div className="mt-10 lg:mt-0 flex justify-end w-full lg:w-fit">
            <Link
              to="/blog"
              className="border px-4 py-2 rounded-[32px] bg-lightGreen hover:border-primary hover:bg-transparent w-fit text-center transition-all duration-300 ease-in-out"
            >
              Browse all articles
            </Link>
          </div>
        </motion.div>

        {/* Grid Layout for featured post and other posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-10 lg:gap-16">
          {/* Featured Post (Left Side - occupies 2 columns) */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7 }}
              className="group md:col-span-2"
            >
              <Link to={`/blog/${featuredPost?.id}`} className="block">
                {/* Featured Post Image */}
                <div className="mb-4">
                  <img
                    src={featuredPost?.image}
                    alt={featuredPost?.title}
                    className="w-full h-auto object-cover aspect-video rounded-3xl"
                  />
                </div>
                {/* Category and Arrow Icon */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-davyGray px-4 py-1 border border-[#E9EAEB] text-base font-medium rounded-[32px]">
                    {featuredPost?.category}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                  </motion.div>
                </div>
                {/* Featured Post Title */}
                <h3 className="text-blueGray mt-2 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                  {featuredPost?.title}
                </h3>
              </Link>
            </motion.div>
          )}

          {/* Other Posts (Right Side - 5 posts without images) */}
          <div className="flex flex-col gap-8 w-full">
            {otherPosts?.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${article?.id}`} className="block">
                  {/* Post Category and Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-davyGray px-4 py-1 border border-[#D5D7DA] text-sm font-medium rounded-[32px]">
                      {article?.category}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                    </motion.div>
                  </div>
                  {/* Post Title */}
                  <h3 className="text-blueGray mt-4 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {article?.title}
                  </h3>
                </Link>

                {/* Add a horizontal divider for posts except the last one */}
                {index < otherPosts.length - 1 && <hr className="border-gray-300 mt-4" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogV1;
