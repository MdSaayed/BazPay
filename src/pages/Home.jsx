import React from 'react';
import { Link } from 'react-router-dom';
import appleIcon from '/assets/icons/apple.svg';
import googleIcon from '/assets/icons/google.svg';
import heroImg from '/assets/img/hero/hero-dashboard.png';
import featureThree from '/assets/img/features/feature-3.png';
import featureFour from '/assets/img/features/feature-4.png';
import featureFive from '/assets/img/features/feature-5.png';
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
import { motion } from 'framer-motion';


const Home = () => {

  // Cards Array 
  const cards = [
    '/assets/img/cards/credit-card-1.png',
    '/assets/img/cards/credit-card-2.png',
    '/assets/img/cards/credit-card-3.png',
  ];

  // Integration Logos Array
  const integrationLogos = [
    '/assets/img/global/integrations-logo-1.png',
    '/assets/img/global/integrations-logo-2.png',
    '/assets/img/global/integrations-logo-3.png',
    '/assets/img/global/integrations-logo-4.png',
    '/assets/img/global/integrations-logo-5.png',
    '/assets/img/global/integrations-logo-6.png',
    '/assets/img/global/integrations-logo-7.png',
    '/assets/img/global/integrations-logo-8.png',
  ];

  // animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


  return (
    <>
      {/* Hero */}
      <section className="bg-lightGrayishWhite">
        <div className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 items-center">
            
            {/* Left Side - Heading Section */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <Title 
                title={<>Simplify your money game with <span>BazPay!</span></>} 
                textAlign='text-center sm:text-left'
              />
            </motion.div>

            {/* Right Side - Description & Download Buttons */}
            <div>
              <motion.p 
                className="mb-6 text-lg leading-7 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                Check out our all-in-one solution for easy transactions, quick money transfers, and total financial control!
              </motion.p>

              {/* Download Buttons */}
              <div className="flex gap-6 flex-col sm:flex-row">
                {/* iOS Download Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="https://www.apple.com/store"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGreen whitespace-nowrap hover:bg-lightGray border hover:border-lightSilver"
                    aria-label="Download BazPay for iOS"
                  >
                    <img src={appleIcon} alt="Download on the App Store" />
                    <span>Download for iOS</span>
                  </Link>
                </motion.div>

                {/* Android Download Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="https://play.google.com/"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGray border border-lightSilver whitespace-nowrap hover:bg-lightGreen hover:border-lightGreen"
                    aria-label="Download BazPay for Android"
                  >
                    <img src={googleIcon} alt="Get it on Google Play" />
                    <span>Download for Android</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div 
            className="mt-20 rounded-md overflow-hidden"
            initial={{ opacity: 0, scale: 1.1 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
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
          <div className="container pt-20 px-0 bg-primary rounded-2xl overflow-hidden">
              <div className="px-2 sm:px-5 md:px-10 lg:px-14 xl:px-20">

                  {/* Subtitle with theme-based colors */}
                  <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible" // Animation triggers each time it enters the viewport
                  >
                      <Subtitle
                          subTitle="Security"
                          color="text-softWhite"
                          bgColor="bg-darkBlue"
                          borderColor="border-darkGrayishBlue"
                      />
                  </motion.div>

                  {/* Title */}
                  <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                  >
                      <Title title="Check our premium cards" color="text-softWhite" />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                  >
                      <Description
                          text="Discover a seamless platform designed for easy payments, quick money transfers, and all your financial needs."
                          color="text-softWhite"
                          maxWidth="max-w-lg"
                      />
                  </motion.div>
              </div>

              {/* Cards Slider with Optimized Background Image */}
              <motion.div
                  className="rounded-md pt-28 pb-8 mt-10 premium-card-bg"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
              >
                  <Slider items={cards} speed={4000} />
              </motion.div>
          </div>
      </section>

      {/* Features Section */}
      <section className="bg-lightGrayishWhite">
          <div className="container py-24">
              <div className="content-wrapper bg-lightLavender py-12 px-2 md:px-10 rounded-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10 justify-between items-center">
                      {/* Title */}
                      <motion.div
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <Title title="Our features" textAlign="text-center lg:text-left" />
                      </motion.div>

                      {/* Description */}
                      <motion.div
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <Description
                              text="Explore the powerful tools BazPay offers to simplify and enhance your financial experience."
                              textAlign="text-center lg:text-left"
                          />
                      </motion.div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 pt-20">
                      {/* Card One */}
                      <motion.div
                          className="xl:col-span-7 flex flex-col xl:flex-row justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10 xl:py-12"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <div>
                              <h3 className="text-primary text-4xl font-semibold leading-normal text-center xl:text-left">
                                  Real-time sync
                              </h3>
                              <p className="text-lg leading-normal text-blueGray text-center xl:text-left mt-6 max-w-[400px]">
                                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus.
                              </p>
                          </div>
                          <img className="max-w-[230px] max-h-[230px]" src={featureThree} alt="Real-time sync" />
                      </motion.div>

                      {/* Card Two */}
                      <motion.div
                          className="xl:col-span-5 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <div>
                              <h3 className="text-primary text-4xl font-semibold leading-normal text-center xl:text-left">
                                  AI Budget Tools
                              </h3>
                              <p className="text-lg leading-normal text-blueGray text-center xl:text-left mt-6 max-w-[400px]">
                                  Track your spending and savings with our AI tools for personalized insights.
                              </p>
                          </div>
                          <img src={featureFour} alt="AI Budget Tools" />
                      </motion.div>

                      {/* Card Three */}
                      <motion.div
                          className="xl:col-span-6 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <div>
                              <h3 className="text-primary text-4xl font-semibold leading-normal text-center">
                                  Built-in integrations
                              </h3>
                              <p className="text-lg leading-normal text-blueGray text-center mt-6 max-w-[400px]">
                                  Manage all your bank accounts in one dashboard for easier finances.
                              </p>
                          </div>

                          {/* Integration Logos */}
                          <div className="integration-logos w-full overflow-hidden">
                              <Slider items={integrationLogos} slidesPerViewMobile={4} slidesPerViewTablet={6} slidesPerViewDesktop={8} spaceBetween={20} reverseDirection={false} />
                              <Slider items={integrationLogos} slidesPerViewMobile={4} slidesPerViewTablet={6} slidesPerViewDesktop={8} spaceBetween={20} reverseDirection={true} />
                          </div>
                      </motion.div>

                      {/* Card Four */}
                      <motion.div
                          className="xl:col-span-6 flex flex-col-reverse lg:flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                      >
                          <img src={featureFive} alt="Payment Solutions" />
                          <div>
                              <h3 className="text-primary text-4xl font-semibold leading-normal text-center">
                                  Payment Solutions
                              </h3>
                              <p className="text-lg leading-normal text-blueGray text-center mt-6 max-w-[400px]">
                                  Easily connect globally. BazPay supports 100+ countries with multi-currency options.
                              </p>
                          </div>
                      </motion.div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-6">
                      <Link
                          to="/contact"
                          className="btn-secondary block w-full text-center md:inline-block md:w-fit"
                      >
                          Contact Us
                      </Link>
                      <Link
                          to="/pricing"
                          className="btn-white block w-full text-center md:inline-block md:w-fit"
                      >
                          Pricing
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Constantly Section */}
      <section className="bg-lightGrayishWhite">
          <div className="container py-24">
              {/* Subtitle */}
              <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible" // Animation triggers each time it enters the viewport
              >
                  <Subtitle subTitle="Investing in your future is crucial." />
              </motion.div>

              {/* Title */}
              <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
              >
                  <Title
                      title='Our team is constantly innovating.'
                      maxWidth='max-w-[768px]'
                  />
              </motion.div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-20">
                  {/* Card One */}
                  <motion.div
                      className="bg-primary rounded-3xl px-4 pt-10"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
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
                  </motion.div>

                  {/* Card Two */}
                  <motion.div
                      className="bg-lightGreen rounded-3xl px-4 pt-10"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                  >
                      <h3 className="text-primary font-semibold text-center text-4xl leading-[1.3] mb-6">
                          Real-Time Analytics & Reporting
                      </h3>
                      <p className="text-blueGray text-center text-base leading-normal font-normal">
                          Gain full visibility of your finances with interactive dashboards and reports. Make data-driven decisions with ease.
                      </p>
                      <div className="mt-6">
                          <img src={phoneMockup} alt="Phone Mockup" />
                      </div>
                  </motion.div>
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
          <Subtitle 
            subTitle="Latest posts" 
            color="text-davyGray" 
            bgColor="bg-lightGreen" 
            borderColor="border-lightGreen" 
          />
          <Title title="Latest blog posts" />
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