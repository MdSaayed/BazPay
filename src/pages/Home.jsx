import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '/assets/img/hero/hero-dashboard.png';
import phoneMockup from '/assets/img/global/phone-mockup-with-card.png';
import barChat from '/assets/img/global/bar-chat.png';
import BrandLogo from '../components/brandLogo/BrandLogo';
import Subtitle from '../components/subtitle/Subtitle';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import Cta from '../components/cta/Cta';
import Faq from '../components/faq/Faq';
import BlogGrid from '../components/blog/BlogGrid';
import Pricing from '../components/pricing/Pricing';
import Slider from '../components/slider/Slider';
import FinancialOverview from '../components/financialOverview/FinancialOverview.jsx';
import { motion, useInView } from 'framer-motion';
import Reveal from '../animation/Reveal.jsx';
import { FaApple } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import BgImage from '/assets/img/global/phone-mockup.png';
import BgImageFront from '/assets/img/global/phone-mockup-front.png';
import FeaturesSection from '../components/featuresSection/FeaturesSection.jsx';
 



const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true) // Lock the animation once it's triggered
    }
  }, [isInView, hasAnimated])

  // Cards Array 
  const cards = [
    '/assets/img/cards/credit-card-1.png',
    '/assets/img/cards/credit-card-2.png',
    '/assets/img/cards/credit-card-3.png',
    '/assets/img/cards/credit-card-4.png'
  ];


  return (
    <>
      {/* Hero */}
      <section className="bg-lightGrayishWhite">
        <div className="container py-10 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 items-center">
            
            {/* Left Side - Heading Section */}
            <div className="text-center md:text-left">
              <Title 
                title={<>Simplify your money game with <span>BazPay!</span></>} 
                textAlign='text-center sm:text-left'
              />
            </div>

            {/* Right Side - Description & Download Buttons */}
            <div>
             <Reveal>
                <p className="mb-6 text-lg leading-7 text-center sm:text-left max-w-xl">
                    Check out our all-in-one solution for easy transactions, quick money transfers, and total financial control!
                </p>
             </Reveal>

              {/* Download Buttons */}
              <div className="flex gap-6 flex-col sm:flex-row">
                {/* iOS Download Button */}
                <Reveal>
                <div>
                  <Link
                    to="https://www.apple.com/store"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGreen hover:bg-primary hover:text-white whitespace-nowrap hover:bg-lightGray border hover:border-primary"
                    aria-label="Download BazPay for iOS"
                  >
                    <FaApple className='text-2xl' />
                    <span>Download for iOS</span>
                  </Link>
                </div>
                </Reveal>

                {/* Android Download Button */}
                <Reveal>
                <div>
                  <Link
                    to="https://play.google.com/"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGray border border-lightSilver whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary"
                    aria-label="Download BazPay for Android"
                  >
                    <IoLogoGoogleplus className='text-2xl'/>
                    <span>Download for Android</span>
                  </Link>
                </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div
              ref={ref}
              className="mt-20 rounded-md overflow-hidden" 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.6 }}
            >
              <img src={heroImg} alt="BazPay Dashboard" loading="lazy" />
          </motion.div>

        </div>
      </section>

      {/* Brands Logos */}
      <BrandLogo 
          title={ <> Working for innovative <span>companies</span>. </> }
          desc="Discover tailored financial solutions that secure your investments."
      />

      {/* Financial Overview */}
      <FinancialOverview />

      {/* Premium Card Slider */}
      <section className="bg-lightGrayishWhite">
          <div className="container py-10 px-2 md:px-5 lg:px-10 ">
              <div className='pt-20 bg-primary rounded-2xl overflow-hidden'>
                <div className="px-2 sm:px-5 md:px-10 lg:px-14 xl:px-20">
                  {/* Subtitle with theme-based colors */}
                  <Subtitle
                      subTitle="Security"
                      color="text-softWhite"
                      bgColor="bg-darkBlue"
                      borderColor="border-darkGrayishBlue"
                  />
                  {/* Title */}
                  <Title title="Check our premium cards" color="text-softWhite" />

                  {/* Description */}
                  <Description
                      text="Discover a seamless platform designed for easy payments, quick money transfers, and all your financial needs."
                      color="text-softWhite"
                      maxWidth="max-w-lg"
                  />
                  </div>

                  <Reveal>
                    {/* Cards Slider with Optimized Background Image */}
                    <div className="relative rounded-md pt-16 pb-12  mt-20 overflow-hidden">
                      <img src={BgImage} className="absolute top-0 left-1/2 -translate-x-1/2 px-16 h-full" />
                      <img src={BgImageFront} className="absolute top-0 left-1/2 -translate-x-1/2 z-20 px-16 h-full" />
                      <Slider items={cards} speed={5000} />
                    </div>
                  </Reveal>
              </div>

          </div>
      </section>

      {/* Features Section */}
      <FeaturesSection /> 

      {/* Constantly Section */}
      <section className="bg-lightGrayishWhite">
          <div className="container py-24">
              {/* Subtitle */}
              <Subtitle subTitle="Investing in your future is crucial." />

              {/* Title */}
             <Title
                    title='Our team is constantly innovating.'
                    maxWidth='max-w-[768px]'
                />

              {/* Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-20">
                  {/* Card One */}
                  <Reveal>
                    <div
                        className="bg-primary rounded-3xl px-4 pt-10 h-full"
                        >
                        <h3 className="text-softWhite font-semibold text-center text-4xl leading-[1.3] mb-6">
                            Real-Time Analytics & Reporting
                        </h3>
                        <p className="text-softWhite text-center text-base leading-normal font-normal">
                            Gain full visibility of your finances with interactive dashboards and reports. Make data-driven decisions with ease.
                        </p>
                        <div className="mt-6">
                            <img src={barChat} alt="Analytics Dashboard" />
                        </div>
                    </div>
                  </Reveal>

                  {/* Card Two */}
                    <Reveal>
                        <div
                            className="bg-lightGreen rounded-3xl px-4 pt-10"
                            >
                            <h3 className="text-primary font-semibold text-center text-4xl leading-[1.3] mb-6">
                                Real-Time Analytics & Reporting
                            </h3>
                            <p className="text-blueGray text-center text-base leading-normal font-normal">
                                Gain full visibility of your finances with interactive dashboards and reports. Make data-driven decisions with ease.
                            </p>
                            <div className="mt-6">
                                <img className='mx-auto' src={phoneMockup} alt="Phone Mockup" />
                            </div>
                        </div>
                    </Reveal>
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Faqs Section */}
      <Faq />

      {/* Blog Section */}
      <section className="bg-lightGrayishWhite" aria-label="Latest blog posts">
        <div className="container py-24">
        {/* Subtitle */}
          <Subtitle 
            subTitle="Latest posts" 
            color="text-davyGray" 
            bgColor="bg-lightGreen" 
            borderColor="border-lightGreen" 
          />

          {/* Title */}
          <Title title="Latest blog posts" />

          {/* Description */}
          <Description 
            text={<>Discover the latest trends, insights, and tips in the world of finance and technology with the BazPay Blog.</>} 
            maxWidth="max-w-[650px]" 
            className="text-center md:text-left"
          />

          {/* Blog Grid */}
          <BlogGrid />
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </>
  );
};

export default Home;