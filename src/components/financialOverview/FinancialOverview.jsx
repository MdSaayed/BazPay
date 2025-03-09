import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6'; // Updated import for arrow icons
import { FaExchangeAlt } from 'react-icons/fa'; // Correct import for FaExchangeAlt icon
import featureOne from '/assets/img/features/feature-2.png'; // Image for the first feature
import featureTwo from '/assets/img/features/feature-1.png'; // Image for the second feature

const FinancialOverview = () => {
    return (
        <section className="bg-lightGrayishWhite">
            <div className="container py-20">
                {/* Section Subtitle */}
                <Subtitle subTitle="Total income and payments overview." />

                {/* Section Title */}
                <Title
                    title={<>
                            Transforming finance – one <span>feature</span> at a time
                        </>}
                    size="text-5xl"
                    fontWeight="font-bold"
                    fontFamily="font-inter"
                    maxWidth='max-w-[568px]'
                />

                {/* Grid Layout for Financial Overview */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 mt-20">

                    {/* Financial Overview One - Current Value Card */}
                    <div className="feature-card md:col-span-6 lg:col-span-5 bg-lightLavender p-6 rounded-2xl shadow-lg">
                        {/* Current Value Label */}
                        <span className="text-base font-medium leading-normal text-primary text-center block">
                            Current value
                        </span>
                        {/* Displaying the current value */}
                        <h3 className="font-semibold text-4xl leading-normal text-primary text-center">
                            $23,952.00
                        </h3>

                        {/* Transfer and Exchange Buttons */}
                        <div className="flex justify-center items-center gap-2 mt-4 my-8">
                            {/* Transfer Up Button */}
                            <button className="px-4 py-2 bg-whiteSmoke text-blueGray text-lg font-medium rounded-lg flex items-center gap-2 shadow-sm transition hover:bg-gray-200">
                                <FaArrowUpLong /> Transfer
                            </button>

                            {/* Exchange Button */}
                            <button
                                className="p-2 bg-softWhite text-blueGray text-lg font-medium rounded-full flex items-center shadow-sm h-10 w-10 transition hover:bg-gray-100"
                                aria-label="Exchange Money"
                            >
                                <FaExchangeAlt className="text-limeGreen mx-auto" />
                            </button>

                            {/* Transfer Down Button */}
                            <button className="px-4 py-2 bg-whiteSmoke text-blueGray text-lg font-medium rounded-lg flex items-center gap-2 shadow-sm transition hover:bg-gray-200">
                                <FaArrowDownLong /> Transfer
                            </button>
                        </div>

                        {/* Feature Image Wrapper */}
                        <div className="img-wrapper rounded-2xl overflow-hidden">
                            <img src={featureOne} alt="Financial Overview Feature" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Financial Overview Two - Secure Transfers Card */}
                    <div className="feature-card md:col-span-6 lg:col-span-7 bg-lightLavender p-6 rounded-2xl shadow-lg">
                        {/* Feature Image Wrapper */}
                        <div className="img-wrapper rounded-2xl overflow-hidden">
                            <img src={featureTwo} alt="Secure Transfers Feature" className="w-full h-auto" />
                        </div>

                        {/* Secure Transfers Title */}
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
