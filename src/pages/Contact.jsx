import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './../components/title/Title';
import PhoneCall from '/assets/icons/phone-call.svg';
import Location from '/assets/icons/sharp-email.svg';
import Email from '/assets/icons/location-filled.svg';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import Reveal from '../animation/Reveal';

const Contact = () => {
    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    // Form submission handler
    const onSubmit = (data) => {
        console.log(data);
        toast.success("Message sent successfully!");
        reset(); // Reset the form after submission
    };
  
    return (
      <section className="bg-lightGrayishWhite">
        <div className="container py-10 lg:py-24">
          {/* Page Title */}
          <Title title='Get in touch with us' maxWidth='max-w-[460px]' />
          
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-20">
              
              {/* Contact Information Section */}
              <div className="bg-primary flex flex-col gap-6 justify-between rounded-3xl px-9 py-10 lg:col-span-2">
                <div>
                  <h3 className="text-softWhite text-3xl font-semibold">Contact Information</h3>
                  <p className="text-whiteSmoke text-lg mt-4">Say something to start a live chat!</p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col items-start gap-y-10 text-softWhite">
                  <div className='flex items-start gap-4'>
                    <img src={PhoneCall} alt="Phone"/>
                    <Link className='font-normal text-base' to='tel:+10123456789'>+1012 3456 789</Link> 
                  </div>
                  <div className='flex items-start gap-4'>
                    <img src={Email} alt="Email"/>
                    <Link className='font-normal text-base' to='mailto:bazpay@gmail.com'>bazpay@gmail.com</Link> 
                  </div>
                  <div className='flex items-start gap-4'>
                    <img src={Location} alt="Location"/>
                    <Link className='font-normal text-base' to='https://goo.gl/maps/xyz123' target='_blank'>132 Dartmouth Street Boston, MA 02156</Link> 
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex gap-6'>
                  <Link to='https://twitter.com/bazpay' target='_blank'>
                      <FaTwitter className='text-softWhite bg-eerieBlack hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all' />
                  </Link>
                  <Link to='https://instagram.com/bazpay' target='_blank'>
                      <FaInstagram className='text-softWhite bg-eerieBlack hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all' />
                  </Link>
                  <Link to='https://discord.com/invite/bazpay' target='_blank'>
                      <BsDiscord className='text-softWhite bg-eerieBlack hover:bg-softWhite w-9 h-9 rounded-full hover:text-primary p-2 transition-all' />
                  </Link>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className='lg:col-span-3 px-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <label className="text-darkGray text-base font-normal">First Name</label>
                          <input
                              type="text" {...register("firstName", { required: "First name is required" })} 
                              className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                              placeholder="John"
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                          <label className="text-darkGray text-base font-normal">Last Name</label>
                          <input
                              type="text" {...register("lastName", { required: "Last name is required" })}
                              className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                              placeholder="Doe"
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                          <label className="text-darkGray text-base font-normal">Email</label>
                          <input
                              type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                              className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                              placeholder="bazpay@gmail.com"
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                          <label className="text-darkGray text-base font-normal">Phone Number</label>
                          <input
                              type="tel" {...register("phone", { required: "Phone number is required" })}
                              className="w-full px-0 py-1 border-b-2 focus:outline-none bg-transparent"
                              placeholder="+1 012 3456 789"
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                  </div>

                  {/* Radio Buttons */}
                  <div className="mt-8">
                      <label className="text-darkGray text-base font-normal mb-4 block">Submit Subject?</label>
                      <div className="flex gap-4 md:gap-10 items-center">
                          <label className="flex items-center gap-3">
                              <input
                                  type="radio"
                                  value="Product design"
                                  {...register("subject", { required: "Please select a subject" })}
                                  className="h-6 w-6 text-blue-500 focus:ring-blue-500 border-2"
                              />
                              <span className="text-darkGray text-base font-normal">Product design</span>
                          </label>
                          <label className="flex items-center gap-3">
                              <input
                                  type="radio"
                                  value="Website design"
                                  {...register("subject", { required: "Please select a subject" })}
                                  className="h-6 w-6 text-blue-500 focus:ring-blue-500 border-2"
                              />
                              <span className="text-darkGray text-base font-normal">Website design</span>
                          </label>
                      </div>
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Message Field */}
                  <div className="mt-8">
                      <label className="text-darkGray text-base font-normal">Message</label>
                      <textarea {...register("message", { required: "Message is required" })}
                      className="w-full h-8 p-0 border-b-2 bg-transparent border-gray-200 focus:outline-none resize-none mt-4"
                      placeholder="Write your message.."
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-8">
                      <button type="submit" className="btn-primary">  
                          <span>Send Message</span>    
                          <MdOutlineArrowOutward className='btn-arrow' />
                      </button>
                  </div>

                </form>
              </div>

            </div>
          </Reveal>
        </div>
        <ToastContainer />
      </section>
    );
};

export default Contact;
