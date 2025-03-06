import React, { useState, useEffect } from 'react';
import LoadingAnimation from './../../src/components/loadingAnimation/LoadingAnimation';
import Title from './../../src/components/title/Title';

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
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        <div className="flex items-center flex-col lg:flex-row justify-between mb-10">
          <Title title="Latest posts" size='text-5xl' textAlign='text-left' />
          <div className="flex space-x-4 mt-10 lg:mt-4 justify-end lg:justify-center w-full">
            {categories.map(category => (
              <button key={category} onClick={() => setFilter(category)}
                className={`filter-btn px-5 py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-limeGreen text-softWhite text-base font-normal' 
                    : ' text-primary text-base font-normal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article key={post.id} className="border border-[#F5F5F5] rounded-3xl overflow-hidden">
              <div className="">
                <div className='"w-full max-h-[300px] overflow-hidden rounded-3xl'>
                    {post.image && (
                    <a href={post.slug} className="">
                        <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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