import React from 'react';
import BlogGrid from './../components/blog/BlogGrid';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import LatestPost from '../components/latestPost/LatestPost';
import Faq from '../components/faq/Faq';
import Cta from '../components/cta/Cta';

const Blog = () => {

    return (
        < >
            {/* Blog Section */}
            <section className="bg-lightGrayishWhite">
                <div className="container py-10 lg:py-24">
                    
                    {/* Section Header */}
                    <Subtitle 
                        subTitle="Latest Posts" 
                        color="text-davyGray" 
                        bgColor="bg-paleGreen" 
                        borderColor="border-paleGreen" 
                    />
                    <Title title="Latest Blog Posts" />

                    {/* Blog Section Description */}
                    <Description 
                        text={<>Discover the latest trends, insights, and tips in the world of finance and technology with the BazPay Blog.</>} 
                        maxWidth="max-w-[650px]" 
                    />

                    {/* Blog Post Grid Component */}
                    <BlogGrid />
                    
                </div>
            </section>

            {/* CTA */}
            <Cta />

            {/* Latest Post */}
            <LatestPost />

            {/* Faqs */}
            <Faq />
        </ >
    );
};

export default Blog;