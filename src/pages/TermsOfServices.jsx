import React from 'react';
import Title from '../components/title/Title';
import Description from '../components/description/Description';
import Reveal from '../animation/Reveal';

const TermsOfServices = () => {
    return (
        <section className='bg-lightGrayishWhite'>
            {/* Container for the content */}
            <div className="container py-10 lg:py-20">
                {/* Main content box with padding and rounded corners */}
                <div className='max-w-6xl mx-auto bg-lightLavender py-12 md:py-24 px-4 md:px-10 rounded-3xl'>
                    
                    {/* Title section */}
                    <Title title='Terms of Services' textAlign='text-left' />
                    <Description 
                        text='At BazPay, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.' 
                        textAlign='text-left' 
                        size='text-lg' 
                        color='text-davyGray' 
                    />

                    {/* Section for Acceptance of Terms */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>1. Acceptance of Terms</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            By accessing or using Bazpay website, services, or products (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                        </p>
                        </div>
                    </Reveal>

                    {/* Section for Description of Services */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>2. Description of Services</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            Bazpay is a digital agency providing web design, development, marketing, and related digital services. The specific services we offer may change over time.
                        </p>
                        </div>
                    </Reveal>

                    {/* Section for User Responsibilities */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>3. User Responsibilities</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            You agree to use our Services only for lawful purposes and in accordance with these Terms. You shall not:
                        </p>
                        </div>
                    </Reveal>

                    {/* List of User Responsibilities */}
                    <Reveal>
                        <div className='mt-12'>
                        <ul className="list-none">
                            <li className="relative text-base font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-davyGray before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Use the Services in any way that violates applicable laws or regulations.
                            </li>
                            <li className="relative text-base font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-davyGray before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Attempt to gain unauthorized access to any part of the Services.
                            </li>
                            <li className="relative text-base font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-davyGray before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Interfere with or disrupt the integrity or performance of the Services.
                            </li>
                            <li className="relative text-base font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-davyGray before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without express written permission from Bazpay.
                            </li>
                        </ul>
                        </div>
                    </Reveal>

                    {/* Section for Intellectual Property */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>4. Intellectual Property</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            All content, features, and functionality of our Services are owned by Bazpay or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                        </p>
                        </div>
                    </Reveal>

                    {/* Section for Payment and Billing */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>5. Payment and Billing</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            For paid Services, you agree to pay all fees associated with the Services you select. All fees are non-refundable unless otherwise specified.
                        </p>
                        </div>
                    </Reveal>

                    {/* Section for Termination */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>6. Termination</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            We reserve the right to terminate or suspend your access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>
                        </div>
                    </Reveal>

                    {/* Section for Governing Law */}
                    <Reveal>
                        <div className="space-y-4 mt-12">
                        <h3 className='text-primary font-semibold text-2xl'>7. Governing Law</h3>
                        <p className='leading-normal mt-4 text-lg text-davyGray text-left'>
                            These Terms shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction], without regard to its conflict of law provisions.
                        </p>
                        </div>
                    </Reveal>

                    {/* Footer note */}
                    <Reveal>
                        <div className='mt-12'>
                        <p className='text-base font-normal text-davyGray'>Bazpay</p>
                        </div>
                    </Reveal>

                    {/* Acknowledgment of the terms */}
                    <Reveal>
                        <div className='mt-12'>
                        <p className='text-base font-normal text-davyGray'>
                            By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default TermsOfServices;
