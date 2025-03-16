import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';
import { FaExchangeAlt } from 'react-icons/fa';
import MonthlyRevenue from '/assets/img/features/monthly-revenue.png';
import SecureTransfers from '/assets/img/features/secure-transfers.png';
import { motion } from 'framer-motion'; // Importing motion
import PropTypes from 'prop-types';

const FinancialOverview = ({cardBg='bg-lightLavender'}) => {

    // Framer Motion animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

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
                        size="text-4xl lg:text-5xl"
                        fontWeight="font-bold"
                        fontFamily="font-inter"
                        maxWidth='max-w-[568px]'
                    />

                {/* Grid Layout for Financial Overview */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 mt-20">
                    {/* Financial Overview One - Current Value Card */}
                    <motion.div
                        className={`feature-card ${cardBg? cardBg:'bg-lightLavender'} md:col-span-6 lg:col-span-5 p-6 rounded-2xl shadow-sm`}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"  // Animation triggered every time it comes into view
                    >
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
                            <button className="px-4 py-2 bg-whiteSmoke text-blueGray text-lg font-medium rounded-lg flex items-center gap-2 shadow-sm transition hover:bg-gray-200">
                                <FaArrowUpLong /> Transfer
                            </button>

                            <button
                                className="p-2 bg-softWhite text-blueGray text-lg font-medium rounded-full flex items-center shadow-sm h-10 w-10 transition hover:bg-gray-100"
                                aria-label="Exchange Money"
                            >
                                <FaExchangeAlt className="text-limeGreen mx-auto" />
                            </button>

                            <button className="px-4 py-2 bg-whiteSmoke text-blueGray text-lg font-medium rounded-lg flex items-center gap-2 shadow-sm transition hover:bg-gray-200">
                                <FaArrowDownLong /> Transfer
                            </button>
                        </div>

                        {/* Feature Image Wrapper */}
                        <div className="img-wrapper rounded-2xl overflow-hidden">
                            <img src={MonthlyRevenue} alt="Financial Overview Feature" className="w-full h-auto" />
                        </div>
                    </motion.div>

                    {/* Financial Overview Two - Secure Transfers Card */}
                    <motion.div
                        className={`feature-card ${cardBg? cardBg:'bg-lightLavender'} md:col-span-6 lg:col-span-7 bg-lightLavender p-6 rounded-2xl shadow-sm`}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"  // Animation triggered every time it comes into view
                    >
                        {/* Feature Image Wrapper */}
                        <div className="img-wrapper rounded-2xl overflow-hidden">
                            <img src={SecureTransfers} alt="Secure Transfers Feature" className="w-full h-auto" />
                        </div>

                        {/* Secure Transfers Title */}
                        <h3 className="font-semibold text-4xl leading-[1.3] text-primary text-center mt-8">
                            Secure transfers anytime, anywhere
                        </h3>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

FinancialOverview.propTypes = {
    cardBg: PropTypes.string
}


export default FinancialOverview;
