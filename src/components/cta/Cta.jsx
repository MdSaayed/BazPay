import React, { useState } from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';

const Cta = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simple email validation
      if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
        setError("Please enter a valid email address.");
        return;
      }
  
      // Simulate a successful subscription
      setSuccess(true);
      setError("");
      setEmail("");
  
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    };

    return (
        <section className='cta'>
        <div className="container  py-20 ">
            <div className="bg-primary rounded-[32px] py-16 px-4">
                <Subtitle subTitle="Pricing" color="text-[#FAFAFA]" bgColor="bg-[#181D27]" borderColor='border-[#252B37]'/>

                <Title title="Value Packed Newsletter" size='text-5xl' fontWeight='font-medium' color='text-softWhite' />

                <Description text="Subscribe to our newsletter for to know big updates before everyone else, and yeah you can unsubscribe anytime!" color='text-softWhite opacity-60' />

                <div className="mt-12">
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="w-full flex items-center justify-center">
                            <div className='relative w-5/6 md:w-1/2'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`w-full block px-4 py-3 border ${
                                        error ? "border-red-500" : "border-[#535862]"
                                    } rounded-3xl focus:ring-2 focus:ring-limeGreen focus:outline-none bg-transparent 
                                    placeholder:text-[#F5F5F5] placeholder:opacity-60 placeholder:text-base placeholder:leading-normal`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />

                                <button type="submit" className="transform absolute top-1/2 right-1 -translate-y-1/2 bg-limeGreen text-white px-5 py-2 rounded-full transition" > Get Started </button>
                                <div className="absolute -bottom-6 left-0">
                                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                    {success && <p className="text-green-500 text-sm mt-2">Thanks for subscribing!</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
      );
};

export default Cta;


