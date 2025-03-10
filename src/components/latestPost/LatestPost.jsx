import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../loadingAnimation/LoadingAnimation';
import Title from '../title/Title';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const LatestPost = () => {
  // State Management
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetching Data from JSON
  useEffect(() => {
    fetch('/blogData.json')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch blog posts");
        return response.json();
      })
      .then(data => {
        setPosts(data || []);

        // Extract unique categories from posts
        const uniqueCategories = [...new Set(data?.map(post => post?.category).filter(Boolean))];
        setCategories(['All', ...uniqueCategories]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);


  // Function to filter posts based on selected category
  const getFilteredPosts = () => (
    filter.toLowerCase() === 'all' 
      ? posts 
      : posts.filter(post => post?.category?.toLowerCase() === filter.toLowerCase())
  );

  // Handle Loading & Error States
  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorMessage error={error} />;


  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          <Title title="Latest Posts" size="text-5xl" textAlign="text-left" />
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap space-x-4 mt-10 lg:mt-4 w-full gap-2">
            {categories?.map(category => (
              <button 
                key={category} 
                onClick={() => setFilter(category)}
                aria-label={`Filter by ${category}`}
                className={`filter-btn px-5 py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-limeGreen text-softWhite text-base font-medium' 
                    : 'text-primary text-base font-normal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredPosts()?.map((post, idx) => (
            <article key={idx} className="border border-whiteSmoke rounded-3xl overflow-hidden group">
              {/* Blog Post Image */}
              {post?.image && (
                <Link  to={`/blog/${post.id}`}  className="block w-full max-h-[300px] overflow-hidden rounded-3xl">
                  <img 
                    src={post?.image} 
                    alt={post?.title || 'Post Image'} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              )}
              
              {/* Blog Post Content */}
              <div className="px-6 py-8">
                <div className="flex items-center gap-4">
                  {/* Category Tag */}
                  {post?.category && (
                    <span className="text-base font-normal text-davyGray border border-[#E9EAEB] px-3 py-1 rounded-3xl">
                      {post?.category}
                    </span>
                  )}
                  {/* Read Time */}
                  <span className="text-base font-normal text-davyGray px-3 py-1">
                  <span>{post?.reading_time || 'N/A'}</span>
                  </span>
                </div>
                {/* Blog Post Title */}
                <h2 className="text-xl font-semibold text-primary mt-4">
                  <Link  to={`/blog/${post?.id}`} className="block hover:text-limeGreen transition-colors">
                    {post?.title || 'Untitled Post'}
                  </Link>
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