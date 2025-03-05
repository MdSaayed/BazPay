import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion
import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Button from "../ui/Button";

const BlogV1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Delay to trigger fade-in
  }, []);


    //  Fatching Blog
    useEffect(() => {
        fetch("/blogV1.json")
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


  // Get the featured post dynamically
  const featuredPost = articles.find((article) => article.featured);
  // Get other posts excluding the featured one
  const otherPosts = articles.filter((article) => !article.featured);

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Fade-up animation
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
        >
          <div>
            <Subtitle subTitle='Blog' borderColor='border-[#F5F5F5] bg-[#ECFFCD]' align="justify-start"/>
            <Title title={<>Our latest News & <br/> Recources</>} textAlign="text-left" />
          </div>
          <Button text="Browse all articles" hoverBorder="hover:border-primary">
            Browse all articles
          </Button>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-10 lg:gap-16">
          {/* Featured Post - Left Side */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Fade-up animation
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: featuredPost.delay * 0.1 }}
              className="group md:col-span-2"
            >
              <a href={featuredPost.link} className="block">
                <div className="mb-4">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-auto object-cover aspect-video rounded-3xl"
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[#535862] px-4 py-1 border border-[#E9EAEB] text-base font-medium rounded-[32px]">{featuredPost.category}</span>
                  <motion.div
                    whileHover={{ x: 5 }} // Move arrow to the right on hover
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                  </motion.div>
                </div>
                <h3 className="text-blueGray mt-2 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                  {featuredPost.title}
                </h3>
              </a>
            </motion.div>
          )}

          {/* Other Posts - Right Side */}
          <div className="flex flex-col gap-8 w-full">
            {otherPosts.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Fade-up animation
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: article.delay * 0.1 }}
                className="group"
              >
                <a href={article.link} className="block">
                  <div className="flex items-center justify-between">
                    <span className="text-[#535862] px-4 py-1 border border-[#D5D7DA] text-sm font-medium rounded-[32px]">{article.category}</span>
                    <motion.div
                      whileHover={{ x: 5 }} // Move arrow to the right on hover
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                    </motion.div>
                  </div>
                  <h3 className="text-blueGray mt-4 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  {index < otherPosts.length - 1 && <hr className="border-gray-300 mt-4" />}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogV1;