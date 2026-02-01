import React from 'react';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import DashboardWithPhone from '/assets/img/global/dashboard-with-mobile.png';
import TablerImg from '/assets/img/global/tabler-icon.png';
import LummiImg from '/assets/img/global/lummi.png';
import { Link } from 'react-router-dom';
import Reveal from '../animation/Reveal';

const Licenses = () => {
    return (
        <>
            {/* Instructions Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-16">
                    <Title title='Instructions' textAlign='text-left' />
                    <Description text="All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below." textAlign='text-left' maxWidth='max-w-[740px]' />
                    
                    {/* List of Instructions */}
                    <Reveal>
                        <div className='mt-8'>
                            <ul className="space-y-4 list-none">
                                <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                    Instructions
                                </li>
                                <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                    WebFlow Template Support
                                </li>
                                <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                    Custom Design & Development
                                </li>
                                <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                    WebFlow Template Support
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Illustration Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Title title='Illustration of the template' size='text-3xl lg:text-4xl' fontWeight='font-medium' textAlign='text-left' />

                    <Reveal>
                        <p className='text-limeGreen font-normal text-2xl mt-6'>Made by BazPay</p>
                        <div className="mt-10">
                            <img className='w-full rounded-xl' src={DashboardWithPhone} alt="Dashboard with mobile display" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Iconography Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Title title='Iconography' size='text-3xl lg:text-4xl' fontWeight='font-medium' textAlign='text-left' />
                    
                    <Reveal>
                        <p className='text-davyGray font-normal text-lg mt-12'>
                            Iconography was sourced from <Link to='https://tablericons.com/' className='text-limeGreen underline' title="Link to Tabler Icons website">Tabler icons</Link>, which is available under a CC0 license.
                        </p>

                        <div className="mt-10">
                            {/* Add alt text for image */}
                            <img className='w-full rounded-xl object-cover' src={TablerImg} alt="Tabler Icons collection" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Image Collection Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='flex flex-col justify-between'>
                            <div>
                                <Title title="Image Collection" size="text-3xl lg:text-4xl" fontWeight="font-medium" textAlign="text-left" />

                                <Reveal>
                                    <p className="text-davyGray font-normal text-lg mt-12">
                                        Images collection from: <Link to="https://lummi.ai" className="text-limeGreen underline" title="Link to Lummi.ai website">lummi.ai</Link>
                                    </p>
                                </Reveal>
                            </div>
                            <Reveal>
                                <div>
                                    <p className="text-davyGray font-normal text-lg mt-12">
                                        All images used in the Bazpay Webflow <Link to="#" className="text-limeGreen underline" title="Link to Fintech SAAS Template"> Fintech SAAS Template</Link> are licensed for free personal and commercial use. If you'd like to use any specific image, you can
                                        check the licenses and download the images for free on Lummi.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                        <Reveal>
                            <div className="mt-10">
                                {/* Add alt text for image */}
                                <img className="w-full rounded-xl object-cover" src={LummiImg} alt="Lummi.ai image collection" />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Licenses;
