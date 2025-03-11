import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';
import SubscribeForm from '../subscribeForm/SubscribeForm';
import ctaBgTop from '/assets/img/global/cta-bg-top.png';
import ctaBgBottom from '/assets/img/global/cta-bg-bottom.png';

const Cta = () => {

  

    return (
        <section className='cta'>
        <div className="container  py-20 ">
            <div className="bg-primary rounded-[32px] py-16 px-4 relative overflow-hidden">
                <Subtitle subTitle="Pricing" color="text-softWhite" bgColor="bg-primary" borderColor='border-blueGray'/>

                <Title title="Value Packed Newsletter" size='text-4xl lg:text-5xl' fontWeight='font-medium' color='text-softWhite' />

                <Description text="Subscribe to our newsletter for to know big updates before everyone else, and yeah you can unsubscribe anytime!" color='text-softWhite opacity-60' />

                <div className="mt-12 flex justify-center">
                    <SubscribeForm formWidth='w-[100%] md:w-[80%] lg:w-[50%]' btnBg='bg-limeGreen' btnText='Get Started' formBg='bg-primary' borderColor='border-davyGray' />
                </div>

                {/* Section Bg */}
                <img className='absolute -top-10 md:top-0 right-2 z-0' src={ctaBgTop} alt="" />
                <img className='absolute -bottom-10 md:bottom-0 z-0' src={ctaBgBottom} alt="" />
            </div>
        </div>
        </section>
      );
};

export default Cta;


