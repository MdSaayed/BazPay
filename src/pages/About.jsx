import React from 'react';
import Team from '../components/team/Team';
import Blog from '../components/blog/Blog';
import Cta from '../components/cta/Cta';
import Stats from '../components/stats/Stats';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import Button from '../components/ui/Button';
import HeroImg from "/assets/img/global/about-hero.png";
import CoreValues from '../components/coreValues/CoreValues';
import Reveal from '../animation/Reveal';
import Faq from '../components/faq/Faq';

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-lightGrayishWhite">
                <div className="container py-10 lg:py-24">
                    {/* Subtitle */}
                    <Subtitle 
                        subTitle="About us" 
                        borderColor="border-paleGreen" 
                        bgColor="bg-mintCream" 
                    />

                    {/* Title */}
                    <Title 
                        title={<>Say hi to the awesome crew at <span className="text-primary">BazPay!</span></>} 
                        maxWidth="max-w-xl lg:max-w-[650px]" 
                    />

                    {/* Description */}
                    <Description 
                        text="Welcome to FinTech Solutions, where our core principles guide us in creating an innovative platform that revolutionizes your financial management experience."  
                        maxWidth="max-w-[768px]" 
                    />

                    {/* Button */}
                    <Reveal>
                        <div className="flex justify-center mt-14 mb-20">
                            <Button text="Contact Us" link='/contact' ariaLabel="Contact BazPay team" />
                        </div>
                    </Reveal>

                    {/* Hero Image */}
                    <Reveal>
                        <div className="flex justify-center">
                            <img 
                                src={HeroImg} 
                                alt="Hero section showing BazPay team" 
                                className="w-full h-auto mx-auto"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Stats */}
            <Stats bgColor='bg-primary' textColor='text-softWhite'/>

            {/* Core Values */}
            <CoreValues />

            {/* Team Section */}
            <Team />

            {/* Faq */}
            <Faq />

            {/* CTA */}
            <Cta />

            {/* Blog */}
            <Blog />
        </>
    );
};

export default About;