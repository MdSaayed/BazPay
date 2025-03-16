import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import { Link } from "react-router-dom";
import LoadingAnimation from "../loadingAnimation/LoadingAnimation";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Reveal from "../../animation/Reveal";
import { useLoading } from "../../context/LoadingContext";

const BlogV1 = () => {
  const { isLoading, startLoading, stopLoading } = useLoading(); // State to manage loading state
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  // Fatching data
  useEffect(() => {
    startLoading();

    fetch("/blogData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        stopLoading();
      })
      .catch((error) => {
        setError(error.message);
        stopLoading();
      });
  }, []);

  const featuredPost = articles?.find((article) => article?.featured);
  const otherPosts = articles.filter((post) => !post.featured).slice(0, 4) || [];

  if (isLoading) return <LoadingAnimation />;
  if (error) return <ErrorMessage error={{ error }} />;

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col gap-20 lg:gap-4 lg:flex-row justify-between items-start lg:items-center mb-10 transition-opacity duration-700 opacity-100">
            <div>
              <Subtitle subTitle="Blog" borderColor="border-whiteSmoke" bgColor="bg-paleGreen" align="justify-start" />
              <Title title="Our latest News & Resources" textAlign="text-left" maxWidth="max-w-[560px]" />
            </div>

            {/* Browse all articles button */}
              <div className="mt-10 lg:mt-0 flex justify-end w-full lg:w-fit">
                <Link to="/blog" className="border px-4 py-2 rounded-[32px] bg-lightGreen hover:border-primary hover:bg-transparent w-fit text-center transition-all duration-300 ease-in-out">
                  Browse all articles
                </Link>
              </div>
          </div>
        </Reveal>


        {/* Grid Layout for Featured and Other Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-10 lg:gap-16">
          {/* Featured Post */}
          {featuredPost && (
            <div className="group md:col-span-2 transition-opacity duration-700 opacity-100">
              <Reveal>
                <Link to={`/blog/${featuredPost?.id}`} className="block">
                  <div className="mb-4">
                    <img src={featuredPost?.image} alt={featuredPost?.title} className="w-full h-auto object-cover aspect-video rounded-3xl" />
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-davyGray px-4 py-1 border border-[#E9EAEB] text-base font-medium rounded-[32px]">
                      {featuredPost?.category}
                    </span>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                    </div>
                  </div>
                  <h3 className="text-blueGray mt-2 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {featuredPost?.title}
                  </h3>
                </Link>
              </Reveal>
            </div>
          )}

          {/* Other Posts */}
          <div className="flex flex-col gap-8 w-full">
            {otherPosts?.map((article, index) => (
              <Reveal  key={index}>
                <div className="group transition-opacity duration-700 opacity-100">
                  <Link to={`/blog/${article?.id}`} className="block">
                    <div className="flex items-center justify-between">
                      <span className="text-davyGray px-4 py-1 border border-[#D5D7DA] text-sm font-medium rounded-[32px]">
                        {article?.category}
                      </span>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowUpRight className="w-[23px] h-[34px] text-limeGreen" />
                      </div>
                    </div>
                    <h3 className="text-blueGray mt-4 text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {article?.title}
                    </h3>
                  </Link>
                  {index < otherPosts.length - 1 && <hr className="border-gray-300 mt-4" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogV1;
