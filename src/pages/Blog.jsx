import React from 'react';
import BlogGrid from './../components/blog/BlogGrid';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import CtaV1 from '../components/cta/CtaV1';
import FaqV1 from '../components/faq/FaqV1';
import LatestPost from '../../public/lastestPost/LatestPost';

const Blog = () => {
    return (
        < >
            {/* Blog Section */}
            <section className="bg-lightGrayishWhite">
                <div className="container py-24">
                <Subtitle subTitle='Latest posts' color='text-[#535862]' bgColor='bg-[#ECFFCD]' borderColor='border-[#ECFFCD]' />
                <Title title="Latest blog posts" />
                <Description text={<>Discover the latest trends, insights, and tips in the world of finance and technology with the MezPay Blog.</> } maxWidth='max-w-[650px]'/>

                {/* Blog Grid */}
                <BlogGrid />
                </div>
            </section>

            {/* CTA */}
            <CtaV1 />

            {/* Latest Post */}
            <LatestPost />

            {/* Faqs */}
            <FaqV1 />
        </ >
    );
};

export default Blog;