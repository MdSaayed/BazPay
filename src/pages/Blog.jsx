import React from 'react';
import BlogGrid from './../components/blog/BlogGrid';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import CtaV1 from '../components/cta/CtaV2';
import FaqV2 from '../components/faq/FaqV2';
import LatestPost from '../components/latestPost/LatestPost';

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
            <CtaV1 />

            {/* Latest Post */}
            <LatestPost />

            {/* Faqs */}
            <FaqV2 />
        </ >
    );
};

export default Blog;