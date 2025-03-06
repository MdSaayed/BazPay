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

  return (
    <>
      {/* Hero */}
      <section className="bg-lightGrayishWhite">
        <div className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 items-center">
            <div className="col-1">
              <h1 className="text-6xl font-semibold leading-[1.3] text-primary text-center sm:text-left">
                Simplify your money game with{' '}
                <span className="text-limeGreen">BazPay!</span>
              </h1>
            </div>
            <div className="col-2">
              <p className="mb-6 text-lg leading-7 text-center sm:text-left">
                Check out our all-in-one solution for easy transactions, quick money transfers, and total financial control!
              </p>
              <div className="flex gap-6 flex-col sm:flex-row">
                <Link
                  to="/download-ios"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGreen whitespace-nowrap hover:bg-lightGray border hover:border-lightSilver"
                >
                  <img src={appleIcon} alt="Download on the App Store" />
                  <span>Download for iOS</span>
                </Link>
                <Link
                  to="/download-android"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGray border border-lightSilver whitespace-nowrap hover:bg-lightGreen hover:border-lightGreen"
                >
                  <img src={googleIcon} alt="Get it on Google Play" />
                  <span>Download for Android</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="img-wrapper mt-20 rounded-md">
            <img src={heroImg} alt="BazPay Dashboard" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Brands Logos */}
      <BrandLogo
        title={
          <>
            Working for innovative <span>companies</span>.
          </>
        }
        desc="Discover tailored financial solutions that secure your investments."
      />

      {/* Financial Overview */}
      <FinancialOverview />

      {/* Premium Cards Section */}
      <section className="bg-lightGrayishWhite">
        <div className="container pt-20 px-0 bg-primary rounded-2xl">
          <div className="px-[10px] sm:px-5 md:px-10 lg:px-14 xl:px-20">
            <Subtitle
              subTitle="Security"
              color="text-[#FAFAFA]"
              bgColor="bg-[#181D27]"
              borderColor="border-[#252B37]"
            />
            <Title title="Check our premium cards" color="text-softWhite" />
            <Description
              text="Discover a seamless platform designed for easy payments, quick money transfers, and all your financial needs."
              color="text-[#FAFAFA]"
              maxWidth="max-w-[694px]"
            />
          </div>

          {/* Cards Slider */}
          <div className="rounded-md pt-28 pb-8 mt-10 bg-[url('/assets/img/global/phone-mockup.png')] bg-no-repeat bg-contain bg-bottom">
            <Slider items={cards} speed={4000} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-lightGrayishWhite">
        <div className="container py-24">
          <div className="content-wrapper bg-[#F0EEF4] py-12 px-2 md:px-10 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10 justify-between items-center">
              <Title title="Our features" textAlign="text-left" />
              <Description
                text="Explore the powerful tools MezPay offers to simplify and enhance your financial experience."
                textAlign="text-left"
              />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 pt-20">
              {/* Card One */}
              <div className="xl:col-span-7 flex flex-col xl:flex-row justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10 xl:py-12">
                <div>
                  <h3 className="text-primary text-4xl font-semibold leading-normal text-center xl:text-left">
                    Real-time sync
                  </h3>
                  <p className="text-lg leading-normal text-blueGray text-center xl:text-left mt-6 max-w-[400px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor mattis sit phasellus.
                  </p>
                </div>
                <img className="max-w-[230px] max-h-[230px]" src={featureThree} alt="Real-time sync" />
              </div>

              {/* Card Two */}
              <div className="xl:col-span-5 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10">
                <div>
                  <h3 className="text-primary text-4xl font-semibold leading-normal text-center xl:text-left">
                    AI Budget Tools
                  </h3>
                  <p className="text-lg leading-normal text-blueGray text-center xl:text-left mt-6 max-w-[400px]">
                    Track your spending and savings with our AI tools for personalized insights.
                  </p>
                </div>
                <img src={featureFour} alt="AI Budget Tools" />
              </div>

              {/* Card Three */}
              <div className="xl:col-span-6 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10">
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
              </div>

              {/* Card Four */}
              <div className="xl:col-span-6 flex flex-col-reverse lg:flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10">
                <img src={featureFive} alt="Payment Solutions" />
                <div>
                  <h3 className="text-primary text-4xl font-semibold leading-normal text-center">
                    Payment Solutions
                  </h3>
                  <p className="text-lg leading-normal text-blueGray text-center mt-6 max-w-[400px]">
                    Easily connect globally. MezPay supports 100+ countries with multi-currency options.
                  </p>
                </div>
              </div>
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
          <Subtitle subTitle="Investing in your future is crucial." />
          <Title
            title={
              <>
                Our team is constantly <br /> innovating.
              </>
            }
          />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-20">
            {/* Card One */}
            <div className="bg-primary rounded-3xl px-4 pt-10">
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

            {/* Card Two */}
            <div className="bg-lightGreen rounded-3xl px-4 pt-10">
              <h3 className="text-primary font-semibold text-center text-4xl leading-[1.3] mb-6">
                Real-Time Analytics & Reporting
              </h3>
              <p className="text-blueGray text-center text-base leading-normal font-normal">
                Gain full visibility of your finances with interactive dashboards and reports. Make data-driven decisions with ease.
              </p>
              <div className="mt-6">
                <img src={phoneMockup} alt="Phone Mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <Faq />

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

      {/* CTA Section */}
      <Cta />
    </>
  );
};

export default Home;