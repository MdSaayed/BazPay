
import React from 'react';
import Title from '../title/Title';
import Description from '../description/Description';
import Reveal from '../../animation/Reveal';
import Slider from '../slider/Slider';
import { Link } from 'react-router-dom';
import featureThree from '/assets/img/features/feature-3.png';
import featureFour from '/assets/img/features/feature-4.png';
import featureFive from '/assets/img/features/feature-5.png';

const FeaturesSection = () => {
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
    <section className="bg-lightGrayishWhite">
    <div className="container py-10 lg:py-20">
        <div className="content-wrapper bg-lightLavender py-12 px-2 md:px-10 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10 justify-between items-center">
                {/* Title */}
                <Title title="Our features" textAlign="text-center lg:text-left" />

                {/* Description */}
               <Description
                  text="Explore the powerful tools BazPay offers to simplify and enhance your financial experience."
                  textAlign="text-center lg:text-left"
                />
            </div>

            {/* Cards */}
            <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 pt-20">
                {/* Card One */}
                <div className="bg-lightGrayishWhite xl:col-span-7 flex flex-col xl:flex-row justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10 xl:py-12"
                   >
                    <div>
                        <h3 className="text-primary text-4xl font-semibold leading-normal text-center xl:text-left">
                            Real-time sync
                        </h3>
                        <p className="text-lg leading-normal text-blueGray text-center xl:text-left mt-6 max-w-[400px]">
                          Track your spending and savings with our AI tools for personalized tips!
                        </p>
                    </div>
                    <img className="max-w-[230px] max-h-[230px]" src={featureThree} alt="Real-time sync" />
                </div>

                {/* Card Two */}
                <div className="bg-lightGrayishWhite xl:col-span-5 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
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
                </div>

                {/* Card Three */}
                <div className="bg-lightGrayishWhite xl:col-span-6 flex flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
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
                </div>

                {/* Card Four */}
                <div className="bg-lightGrayishWhite xl:col-span-6 flex flex-col-reverse lg:flex-col xl:justify-between items-center gap-10 bg-lightGray rounded-3xl px-4 md:px-8 py-10"
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
                </div>
            </div>
            </Reveal>

            {/* Buttons */}
            <Reveal>
              <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-6">
                <Link
                    to="/contact"
                    className="btn-secondary hover:bg-primary hover:text-white block w-full text-center md:inline-block md:w-fit"
                >
                    Contact Us
                </Link>
                <Link
                    to="/pricing"
                    className="btn-black block w-full text-center md:inline-block md:w-fit"
                >
                    Pricing
                </Link>
            </div>
            </Reveal>
        </div>
    </div>
</section>
  );
};

export default FeaturesSection;