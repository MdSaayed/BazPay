import React from 'react';
import Team from '../components/team/Team';
import Title from '../components/title/Title';
import Subtitle from '../components/subtitle/Subtitle';
import HeroCard from "/assets/img/hero/hero-card.png";
import Description from '../components/description/Description';
import Button from '../components/ui/Button';
import PricingCard from '../components/pricingCard/PricingCard';
import CtaV2 from '../components/cta/CtaV2';
import Stats from '../components/stats/Stats';
import FaqV2 from '../components/faq/FaqV2';
import BlogV1 from '../components/blog/BlogV1';
import FeaturesSection from '../components/features/Features'; 
import { motion } from "framer-motion";
import SecurityFeatures from '../components/securityFeatures/SecurityFeatures';





const HomeV1 = () => {

    /**Hero Animation Variants **/
    const fadeUp = {
        hidden: { opacity: 0, y: 40 }, // Starts from below
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    
    const fadeRight = {
        hidden: { opacity: 0, x: -40 }, // Starts from left
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    };

      
    return (
        <>
            {/* Hero */}
            <motion.section
                className="bg-lightGrayishWhite"
                initial="hidden"
                whileInView="visible" // Animation triggers on scroll
                viewport={{ once: false, amount: 0.2 }} // Repeats each time it enters viewport
                variants={staggerContainer}
                >
                <div className="container mx-auto py-8 md:py-16">
                    {/* Hero Content Box */}
                    <motion.div 
                    className="bg-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 p-6 md:p-10 rounded-3xl"
                    variants={fadeUp} // Background fades in
                    >
                    {/* Image Section - Right Side on Desktop */}
                    <motion.div className="order-1 lg:order-2" variants={fadeRight}>
                        <img
                        src={HeroCard}
                        alt="BazPay Travel Cards"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                        />
                    </motion.div>

                    {/* Text & Buttons Section - Left Side on Desktop */}
                    <motion.div className="order-2 lg:order-1">
                        {/* Title Animation */}
                        <motion.div variants={fadeUp}>
                        <Title
                            title="Check out our travel cards!"
                            maxWidth="max-w-[560px]"
                            size="text-5xl lg:text-7xl"
                            color="text-softWhite"
                            fontWeight="font-semibold"
                            textAlign="text-left"
                            lineHeight="leading-tight"
                        />
                        </motion.div>

                        {/* Description Animation */}
                        <motion.div variants={fadeUp}>
                        <Description
                            text="At BazPay, we believe managing your money should be easy, safe, and accessible. Our platform combines the best tools for your finances."
                            textAlign="text-left"
                            color="text-whiteSmoke"
                            size="text-lg"
                        />
                        </motion.div>

                        {/* Buttons Animation */}
                        <motion.div className="flex flex-col md:flex-row gap-4 mt-6" variants={fadeUp}>
                        <Button text="Contact Us" aria-label="Contact Us" />
                        <Button
                            text="Pricing"
                            bgColor="bg-softWhite"
                            hoverBgColor="hover:bg-lightGreen"
                            border="border-softWhite"
                            hoverBorder="hover:border-lightGreen"
                            aria-label="View Pricing"
                        />
                        </motion.div>
                    </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats */}
            <Stats/>

            {/* Security Features  */}
            <SecurityFeatures />
 
            {/* Features  */}
            <FeaturesSection />

            {/* Team Section */}
            <Team />

            {/* Faq */}
            <FaqV2 />

            {/* Pricing */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Subtitle subTitle='Pricing' borderColor='border-paleGreen' bgColor='bg-paleGreen' />
                    <Title 
                        title={<>Give it a shot for free and take charge of <span>your finances!</span></>} 
                        maxWidth="max-w-[768px]" size='text-4xl lg:text-5xl' 
                        fontWeight='font-medium' />

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                        <PricingCard />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaV2 />

            {/* Blog */}
            <BlogV1 />
        </>
    );
};

export default HomeV1;
