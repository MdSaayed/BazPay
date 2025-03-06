import React, { useState, useEffect, useCallback } from 'react';
import LoadingAnimation from './../loadingAnimation/LoadingAnimation';
import Title from './../title/Title';

const LatestPost = () => {
  // State for managing category filter
  const [filter, setFilter] = useState('All');

  // State for storing fetched posts
  const [posts, setPosts] = useState([]);

  // Loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Categories list, initialized with 'All'
  const [categories, setCategories] = useState(['All']);

  // Fetching posts from JSON file
  useEffect(() => {
    fetch('/latestPost.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data || []); // Ensure data is an array

        // Extract unique categories from posts and update state
        const uniqueCategories = [...new Set(data?.map(post => post?.category))].filter(Boolean);
        setCategories(['All', ...uniqueCategories]);

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Filtered posts based on selected category
  const filteredPosts = useCallback(
    () => (filter === 'All' ? posts : posts?.filter(post => post?.category === filter)),
    [filter, posts]
  );

  if (loading) return <LoadingAnimation />;

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Section Title & Category Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          <Title title="Latest posts" size="text-5xl" textAlign="text-left" />
          <div className="flex space-x-4 mt-10 lg:mt-4 justify-end lg:justify-center w-full">
            {/* Category Filter Buttons */}
            {categories?.map(category => (
              <button 
                key={category} 
                onClick={() => setFilter(category)}
                className={`filter-btn px-5 py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-limeGreen text-softWhite text-base font-normal' 
                    : 'text-primary text-base font-normal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts()?.map(post => (
            <article key={post?.id} className="border border-[#F5F5F5] rounded-3xl overflow-hidden">
              
              {/* Blog Post Image */}
              {post?.image && (
                <a href={post?.slug || '#'} className="block w-full max-h-[300px] overflow-hidden rounded-3xl">
                  <img 
                    src={post?.image} 
                    alt={post?.title || 'Post Image'} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              )}
              
              {/* Blog Post Content */}
              <div className="px-4 py-8">
                <div className="flex items-center gap-4">
                  {/* Category Tag */}
                  {post?.category && (
                    <span className="text-base font-normal text-davyGray border border-[#E9EAEB] px-3 py-1 rounded-3xl">
                      {post?.category}
                    </span>
                  )}
                  {/* Read Time */}
                  <span className="text-base font-normal text-davyGray px-3 py-1">
                    {post?.readTime || 'N/A'}
                  </span>
                </div>
                
                {/* Blog Post Title */}
                <h2 className="text-xl font-semibold text-primary mt-4">
                  <a href={post?.slug || '#'} className="block">
                    {post?.title || 'Untitled Post'}
                  </a>
                </h2>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
