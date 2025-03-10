import React from 'react';
import Team from '../components/team/Team';
import Title from '../components/title/Title';
import Subtitle from '../components/subtitle/Subtitle';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineFingerPrint } from "react-icons/hi2";
import { SiSecurityscorecard } from "react-icons/si";
import HeroCard from "/assets/img/hero/hero-card.png";
import Description from '../components/description/Description';
import Button from '../components/ui/Button';
import PricingCard from '../components/pricingCard/PricingCard';
import CtaV1 from '../components/cta/CtaV1';
import Stats from '../components/stats/Stats';
import FaqV1 from '../components/faq/FaqV1';
import BlogV1 from '../components/blog/BlogV1';
import FeaturesSection from '../components/features/Features'; 




const HomeV1 = () => {

      
    return (
        <>
            {/* Hero */}
            <section className="bg-lightGrayishWhite">
                <div className="container mx-auto py-8 md:py-16">
                    <div className="bg-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 p-6 md:p-10 rounded-3xl">
                        {/* Image Section - Responsive Order */}
                        <div className="order-1 lg:order-2">
                            <img
                                src={HeroCard}
                                alt="BazPay Travel Cards"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        {/* Text & Buttons Section */}
                        <div className="order-2 lg:order-1">
                            <Title
                                title="Check out our travel cards!"
                                maxWidth="max-w-[560px]"
                                size="text-6xl md:text-7xl"
                                color="text-softWhite"
                                fontWeight="font-semibold"
                                textAlign="text-left"
                                lineHeight="leading-tight"
                            />
                            <Description
                                text="At BazPay, we believe managing your money should be easy, safe, and accessible. Our platform combines the best tools for your finances."
                                textAlign="text-left"
                                color="text-whiteSmoke"
                                size="text-lg"
                            />

                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row gap-4 mt-6">
                                <Button text="Contact Us" aria-label="Contact Us" />
                                <Button
                                    text="Pricing"
                                    bgColor="bg-softWhite"
                                    hoverBgColor="hover:bg-lightGreen"
                                    border="border-softWhite"
                                    hoverBorder="hover:border-lightGreen"
                                    aria-label="View Pricing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats/>

            {/* Security Features  */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Subtitle subTitle='Security' bgColor='bg-paleGreen' borderColor='border-whiteSmoke' />
                    <Title title='Secured with awesome security measures!' maxWidth='max-w-[800px]' />

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                        {/* Card One */}
                        <div className='bg-white px-5 py-8 rounded-2xl'>
                            <HiOutlineFingerPrint className="bg-limeGreen text-[60px] p-3 rounded-2xl text-white"/>
                            <div className='mt-6'>
                                <h3 className='mb-2 text-primary font-semibold text-2xl'>Your assets insured</h3>
                                <p className='text-base text-davyGray'>Manage all your bank accounts in one place with a single dashboard.</p>
                            </div>
                        </div>
                        
                        {/* Card Two */}
                        <div className='bg-white px-5 py-8 rounded-2xl'>
                            <MdOutlineNotificationsActive className="bg-limeGreen text-[60px] p-3 rounded-2xl text-primary" /> 
                            <div className='mt-6'>
                                <h3 className='mb-2 text-primary font-semibold text-2xl'>Instant Notifications</h3>
                                <p className='text-base text-davyGray'>Stay informed with real-time alerts for transactions, updates, and account activities.</p>
                            </div>
                        </div>

                        {/* Card Three */}
                        <div className='bg-white px-5 py-8 rounded-2xl'>
                            <SiSecurityscorecard className="bg-primary text-[60px] p-3 rounded-2xl text-white" />
                            <div className='mt-6'>
                                <h3 className='mb-2 text-primary font-semibold text-2xl'>Zero Hidden Fees</h3>
                                <p className='text-base text-davyGray'>Enjoy clear pricing with no hidden fees—just honest rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Features  */}
            <FeaturesSection />

            {/* Team Section */}
            <Team />

            {/* Faq */}
            <FaqV1 />

            {/* Pricing */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Subtitle subTitle='Pricing' borderColor='border-paleGreen' bgColor='bg-paleGreen' />
                    <Title title={<>Give it a shot for free and take charge of <span>your finances!</span></>} maxWidth="max-w-[768px]" size='text-5xl' fontWeight='font-medium' />

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                        <PricingCard />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaV1 />

            {/* Blog */}
            <BlogV1 />
        </>
    );
};

export default HomeV1;
