import React, { useState, useEffect } from 'react';
import LoadingAnimation from './../../src/components/loadingAnimation/LoadingAnimation';

const LatestPost = () => {
  const [filter, setFilter] = useState('All');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(['All']);


  useEffect(() => {
    fetch('/latestPost.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        // Extract unique categories from posts
        const uniqueCategories = [...new Set(data.map(post => post.category))].filter(Boolean);
        setCategories(['All', ...uniqueCategories]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.category === filter);

  if (loading) return <LoadingAnimation />;

  return (
    <section className="">
      <div className="container">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Latest posts</h1>
          <div className="flex justify-center space-x-4 flex-wrap">
            {categories.map(category => (
              <button key={category} onClick={() => setFilter(category)}
                className={`filter-btn px-5 py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="border border-[#F5F5F5] rounded-3xl overflow-hidden">
              <div className="">
                <div>
                    {post.image && (
                    <a href={post.slug} className="block overflow-hidden rounded-3xl">
                        <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full max-h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>
                    )}
                </div>
                
                <div className="px-4 py-8">
                    <div className="flex items-center gap-4">
                        {post.category && (
                            <span className="text-base font-normal text-davyGray border border-[#E9EAEB] px-3 py-1 rounded-3xl">
                            {post.category}
                            </span>
                        )}
                        <span className="text-base font-normal text-davyGray px-3 py-1">{post.readTime}</span>
                    </div>
                        
                    <h2 className="text-xl font-semibold text-primary mt-4">
                    <a href={post.slug} className="block"> {post.title} </a> </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;