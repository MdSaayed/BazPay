import React from 'react';
import { Link } from 'react-router-dom';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import CloudIcon from "/assets/icons/cloud.svg";
import PlayStoreImg from "/assets/img/global/playstore.png";
import AppleStoreImg from "/assets/img/global/apple-store.png";
import UserRatingImg from "/assets/img/global/user-with-rating.png";
import PhoneCtaV1 from "/assets/img/global/phone-ctaV1.png";
import FrameImg from "/assets/img/global/ctav1-frame.png";
import Reveal from '../../animation/Reveal';



const CtaV1 = () => {
    return (
        <section
            className="bg-lightGrayishWhite">
            <div className="container py-8 md:py-16">
                {/* CTA Wrapper */}
                <div 
                    className="bg-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 p-6 md:p-10 rounded-3xl overflow-hidden"
                >
                    {/* Left Content */}
                    <div>
                        {/* Subtitle Component */}
                        <Subtitle 
                            subTitle="Pricing" 
                            color="text-softWhite" 
                            borderColor="border-softWhite" 
                            align="justify-start" 
                        />

                        {/* Main Title */}
                        <Title 
                            title="Growth performance tracking made easy" 
                            color="text-softWhite" 
                            textAlign="text-left" 
                            size="text-4xl lg:text-5xl" 
                        />

                        {/* Feature: Cloud Sync */}
                        <Reveal>
                            <div className="mt-8 flex gap-6 items-center">
                                <img  src={CloudIcon}   alt="Cloud Sync Icon" />
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium leading-normal text-softWhite">
                                        Cross-Platform Sync
                                    </span>
                                    <span className="text-sm text-softWhite leading-normal">
                                        Real-time sync on all platforms & devices.
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* App Download Links */}
                        <Reveal>
                            <div className="mt-8 flex gap-6 items-center">
                                <Link to="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={PlayStoreImg} alt="Download on Google Play Store" />
                                </Link>
                                <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                    <img src={AppleStoreImg} alt="Download on Apple App Store" />
                                </Link>
                            </div>
                        </Reveal>

                        {/* User Ratings Section */}
                        <Reveal>
                            <div className="mt-12">
                                <img src={UserRatingImg} alt="User Ratings and Reviews" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Content: Mobile Preview Image */}
                    <Reveal>
                        <div 
                            className="-mb-6 md:-mb-10 relative mx-auto">
                            <img src={PhoneCtaV1} alt="App interface preview on mobile" />

                            {/* Decorative Frame */}
                            <img 
                                className="frame absolute top-2 md:top-1/3 right-5 lg:-left-20" 
                                src={FrameImg} 
                                alt="Decorative frame" 
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CtaV1;
