import React from 'react';
import Title from './../components/title/Title';
import PhoneCall from '/assets/icons/phone-call.svg';
import Location from '/assets/icons/sharp-email.svg';
import Email from '/assets/icons/location-filled.svg';
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";





const Contact = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container">
        <Title title='Get in touch with us' maxWidth='max-w-[460px]' />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-20">
            {/* Contact Information */}
            <div className="bg-primary flex flex-col gap-6 justify-between rounded-3xl px-9 py-10 lg:col-span-2">
                <div>
                    <h3 className="text-softWhite text-3xl font-semibold">Contact Information</h3>
                    <p className="text-[#F5F5F5] text-lg mt-4">Say something to start a live chat!</p>
                </div>

                {/* Informations */}
                <div className="flex flex-col items-start gap-y-10 text-softWhite">
                    <div className='flex items-start gap-4'>
                        <img src={PhoneCall} />
                        <Link className='font-normal text-base' to=''>+1012 3456 789</Link> 
                    </div>
                    <div className='flex items-start gap-4'>
                        <img src={Email} />
                        <Link className='font-normal text-base' to=''>mezpay@gmail.com</Link> 
                    </div>
                    <div className='flex items-start gap-4'>
                        <img src={Location} />
                        <Link className='font-normal text-base' to=''>132 Dartmouth Street Boston, Massachusetts 02156 United States</Link> 
                    </div>
                </div>

                {/* Social Links */}
                <div className='flex gap-6'>
                    <Link to=''>
                        <FaTwitter className='text-softWhite bg-[#1B1B1B] hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all'   />
                    </Link>
                    <Link to=''>
                        <FaInstagram className='text-softWhite bg-[#1B1B1B] hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all' />
                    </Link>
                    <Link to=''>
                        <BsDiscord className='text-softWhite bg-[#1B1B1B] hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all'   />
                    </Link>
                </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-3'>
                <form className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-[#404040] text-base font-normal">Find Name</label>
                            <input
                                type="text"
                                className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="text-[#404040] text-base font-normal">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <label className="text-[#404040] text-base font-normal">Email</label>
                            <input
                                type="email"
                                className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                                placeholder="mezpay@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="text-[#404040] text-base font-normal">Phone Number</label>
                            <input
                                type="phone"
                                className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                                placeholder="+1 012 3456 789"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label className="text-[#404040] text-base font-normal  mb-4 block">Submit Subject?</label>
                        <div className="flex gap-10 items-center">
                            <label className="flex items-center gap-3">
                                <input
                                type="radio"
                                name="subject"
                                className="h-6 w-6 text-blue-500 focus:ring-blue-500 border-2"
                                />
                                <span className="text-lg">Product design</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input
                                type="radio"
                                name="subject"
                                className="h-6 w-6 text-blue-500 focus:ring-blue-500 border-2"
                                />
                                <span className="text-lg">Website design</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8">
                        <label className="text-[#404040] text-base font-normal">Message</label>
                        <textarea
                        className="w-full h-8 p-0 border-b-2 bg-transparent border-gray-200 focus:outline-none resize-none mt-4"
                        placeholder="Write your message.."
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-8">
                        <button type="submit" className="btn-primary">  
                            <span >Send Message</span>    
                            <MdOutlineArrowOutward className='btn-arrow' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;