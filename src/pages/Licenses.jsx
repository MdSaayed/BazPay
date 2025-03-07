import React from 'react';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import DashboardWithPhone from '/assets/img/global/dashboard-with-mobile.png';
import TablerImg from '/assets/img/global/tabler-icon.png';
import LummiImg from '/assets/img/global/lummi.png';
import { Link } from 'react-router-dom';

const Licenses = () => {
    return (
        <>
            {/* Instructions */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-16">
                    <Title title='Instructions' textAlign='text-left' />
                    <Description text="All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below." textAlign='text-left' maxWidth='max-w-[740px]' />
                    
                    {/* Instructions Items */}
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
                </div>
            </section>

            {/* Illustration of the template */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Title title='Illustration of the template' size='text-4xl' fontWeight='font-medium' textAlign='text-left' />
                    <p className='text-limeGreen font font-normal text-2xl mt-6'>Made by MezPay</p>

                    <div className="mt-10">
                        <img className='w-full rounded-xl' src={DashboardWithPhone} alt="" />
                    </div>
                </div>
            </section>

            {/* Iconography */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <Title title='Iconography' size='text-4xl' fontWeight='font-medium' textAlign='text-left' />
                    <p className='text-davyGray  font font-normal text-lg mt-12'>Iconography was sourced from <Link to='' className='text-limeGreen underline'>Tabler icons</Link>  Which is available under a CC0 license.</p>

                    <div className="mt-10">
                        <img className='w-full rounded-xl object-cover' src={TablerImg} alt="" />
                    </div>
                </div>
            </section>

            {/* Iconography */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='flex flex-col justify-between'>
                            <div>
                                <Title title="Iconography" size="text-4xl" fontWeight="font-medium" textAlign="text-left" />
                                <p className="text-davyGray font-normal text-lg mt-12">
                                    Images collection from: <Link to="" className="text-limeGreen underline">lummi.ai</Link>
                                </p>
                            </div>
                            <div>
                                <p className="text-davyGray font-normal text-lg mt-12">
                                    All images used in the Enova Webflow <Link to="" className="text-limeGreen underline">CRM SAAS Template</Link>  
                                    are licensed for free personal and commercial use. If you'd like to use any specific image, you can 
                                    check the licenses and download the images for free on Lummi.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img className="w-full rounded-xl object-cover" src={LummiImg} alt="Iconography" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Licenses;