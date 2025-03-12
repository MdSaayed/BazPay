import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import CloudIcon from "/assets/icons/cloud.svg";
import PlayStoreImg from "/assets/img/global/playstore.png";
import AppleStoreImg from "/assets/img/global/apple-store.png";
import UserRatingImg from "/assets/img/global/user-with-rating.png";
import PhoneCtaV1 from "/assets/img/global/phone-ctaV1.png";
import FrameImg from "/assets/img/global/ctav1-frame.png";

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconPop = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const CtaV1 = () => {
    return (
        <motion.section
            className="bg-lightGrayishWhite"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
            variants={staggerContainer}
        >
            <div className="container py-8 md:py-16">
                {/* CTA Wrapper */}
                <motion.div 
                    className="bg-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 p-6 md:p-10 rounded-3xl"
                    variants={fadeUp}
                >
                    {/* Left Content */}
                    <div>
                        {/* Subtitle Component */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 1 }}
                            variants={fadeUp}
                            >
                            <Subtitle 
                                subTitle="Pricing" 
                                color="text-softWhite" 
                                borderColor="border-softWhite" 
                                align="justify-start" 
                            />
                        </motion.div>

                        {/* Main Title */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 1 }}
                            variants={fadeUp}
                        >
                            <Title 
                                title="Growth performance tracking made easy" 
                                color="text-softWhite" 
                                textAlign="text-left" 
                                size="text-4xl lg:text-5xl" 
                            />
                        </motion.div>

                        {/* Feature: Cloud Sync */}
                        <motion.div 
                            className="mt-8 flex gap-6 items-center" 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 1 }}
                            variants={fadeUp}
                        >
                            <motion.img 
                                src={CloudIcon} 
                                alt="Cloud Sync Icon" 
                                variants={iconPop}
                            />
                            <div className="flex flex-col">
                                <span className="text-lg font-medium leading-normal text-softWhite">
                                    Cross-Platform Sync
                                </span>
                                <span className="text-sm text-softWhite leading-normal">
                                    Real-time sync on all platforms & devices.
                                </span>
                            </div>
                        </motion.div>

                        {/* App Download Links */}
                        <motion.div 
                            className="mt-8 flex gap-6 items-center" 
                            variants={fadeUp}
                        >
                            <Link to="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                <img src={PlayStoreImg} alt="Download on Google Play Store" />
                            </Link>
                            <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src={AppleStoreImg} alt="Download on Apple App Store" />
                            </Link>
                        </motion.div>

                        {/* User Ratings Section */}
                        <motion.div 
                            className="mt-12" 
                            variants={fadeUp}
                        >
                            <img src={UserRatingImg} alt="User Ratings and Reviews" />
                        </motion.div>
                    </div>

                    {/* Right Content: Mobile Preview Image */}
                    <motion.div 
                        className="-mb-6 md:-mb-10 relative mx-auto" 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeUp}
                    >
                        <img src={PhoneCtaV1} alt="App interface preview on mobile" />

                        {/* Decorative Frame */}
                        <img 
                            className="frame absolute top-2 md:top-1/3 right-5 lg:-left-20" 
                            src={FrameImg} 
                            alt="Decorative frame" 
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CtaV1;
