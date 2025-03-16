import React from 'react';
import PricingCard from '../components/pricingCard/PricingCard';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import CtaV1 from '../components/cta/CtaV2';
import Description from '../components/description/Description';
import BlogGrid from '../components/blog/BlogGrid';
import ComparePlans from '../components/comparePlans/ComparePlans';

const Pricing = () => {
    return (
        <>
            {/* Pricing */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-10 lg:py-24 bg-lightLavender rounded-3xl">
                    <Subtitle subTitle='Pricing' borderColor='border-paleGreen' bgColor='bg-paleGreen' />
                    <Title 
                        title={<>Give it a shot for free and take charge of <span>your finances!</span></>} 
                        maxWidth="max-w-[768px]" size='text-3xl lg:text-5xl' fontWeight='font-medium' 
                        />

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                        <PricingCard />
                    </div>
                </div>
            </section>

            {/* Compare Plans */}
            <ComparePlans />

            {/* CTA */}
            <CtaV1 />

            {/* Blog Section */}
            <section className="bg-lightGrayishWhite">
                <div className="container py-24">
                    
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
        </>
    );
};

export default Pricing;