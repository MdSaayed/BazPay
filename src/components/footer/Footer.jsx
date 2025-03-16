import React from 'react';
import { Link } from 'react-router-dom';
import SubscribeForm from '../subscribeForm/SubscribeForm';

const Footer = () => {
    return (
        <footer className="footer py-12  bg-lightGrayishWhite">
            <div className="container px-4">
                <div className="footer-area bg-white rounded-3xl px-4 md:px-8 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                        {/* Logo and Newsletter Section */}
                        <div className="md:col-span-2 lg:pr-8">
                            <img className="max-w-[134px] mb-12" src="/logo.png" alt="Logo" />
                            <div className="newsletter">
                                <h2 className="text-xl text-primary font-medium  mb-4">Subscribe for our newsletter</h2>
                                <SubscribeForm />
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="footer-links">
                            <h3 className="text-lg mb-4 text-primary font-medium">Product</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Home V1</Link></li>
                                <li><Link to="homev2" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Home V2</Link></li>
                                <li><Link to="/features" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Features</Link></li>
                                <li><Link to="/pricing" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Pricing</Link></li>
                                <li><Link to="/pricing/1" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Pricing details (CMS)</Link></li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="footer-links">
                            <h3 className="text-lg mb-4 text-primary font-medium">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">About</Link></li>
                                <li><Link to="/blog" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Blog</Link></li>
                                <li><Link to="/blog/4" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Blog details (CMS)</Link></li>
                                <li><Link to="/contact" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Utilities Links */}
                        <div className="footer-links">
                            <h3 className="text-lg mb-4 text-primary font-medium">Utilities</h3>
                            <ul className="space-y-2">
                                <li><Link to="/licenses" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">License</Link></li>
                                <li><Link to="/privacypolicy" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">Terms of Services</Link></li>
                                <li><Link to="/404" className="text-davyGray text-base font-normal hover:text-primary mb-3 block">404</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="border-t border-lightSilver mt-8 pt-8 flex flex-wrap justify-center md:justify-start items-center gap-y-2 gap-x-4">
                        <p className="text-davyGray leading-normal text-base">&copy;2025 <Link to={"https://www.uibazar.com"} className='text-limeGreen'>Ulbazar. </Link>All rights reserved.</p>
                        <div className="flex justify-center lg:text-left space-x-4">
                            <Link to="/terms" className="text-davyGray leading-normal text-base hover:text-blue-500">Terms</Link>
                            <Link to="/privacypolicy" className="text-davyGray leading-normal text-base hover:text-blue-500">Privacy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;