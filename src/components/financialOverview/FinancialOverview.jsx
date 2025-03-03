import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6'; // Updated import
import { FaExchangeAlt } from 'react-icons/fa'; // Correct import for FaExchangeAlt
import featureOne from '/assets/img/features/feature-2.png';
import featureTwo from '/assets/img/features/feature-1.png';

const FinancialOverview = () => {
    return (
        <section className="bg-lightGrayishWhite">
        <div className="container py-20">
            <Subtitle subTitle="Total income and payments overview." />
            <Title
            title={ <> Transforming finance – one <br /> <span>feature</span> at a time </> }
            size="text-5xl"
            fontWeight="font-bold"
            fontFamily="font-inter"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 mt-20">
            {/* Financial Overview One */}
            <div className="feature-card md:col-span-5 bg-[#F0EEF4] p-6 rounded-[16px]">
                <span className="text-base font-medium leading-normal text-primary text-center block">
                Current value
                </span>
                <h3 className="font-semibold text-4xl leading-normal text-primary text-center">
                $23,952.00
                </h3>
                <div className="flex justify-center items-center gap-2 mt-4 my-8">
                <button className="px-4 py-2 bg-[#F5F5F5] text-blueGray text-lg leading-normal font-medium rounded-lg flex items-center gap-2 shadow-sm">
                    <FaArrowUpLong /> Transfer
                </button>
                <button className="p-1 bg-[#FAFAFA] text-blueGray text-lg leading-normal font-medium rounded-full flex items-center gap-2 -ml-4 -mr-4 shadow-sm z-50 h-10 w-10">
                    <FaExchangeAlt className="text-limeGreen mx-auto" />
                </button>
                <button className="px-4 py-2 bg-[#F5F5F5] text-blueGray text-lg leading-normal font-medium rounded-lg flex items-center gap-2 shadow-sm">
                    <FaArrowDownLong /> Transfer
                </button>
                </div>
                <div className="img-wrapper rounded-[16px]">
                <img src={featureOne} alt="Feature One" />
                </div>
            </div>

            {/* Financial Overview Two */}
            <div className="feature-card md:col-span-7 bg-[#F0EEF4] p-6 rounded-[16px]">
                <div className="img-wrapper rounded-[16px]">
                <img src={featureTwo} alt="Feature Two" />
                </div>
                <h3 className="font-semibold text-4xl leading-[1.3] text-primary text-center mt-8">
                Secure transfers anytime, anywhere
                </h3>
            </div>
            </div>
        </div>
        </section>
    );
};

export default FinancialOverview;