import React from "react";
import { motion } from "framer-motion";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import SubscribeForm from "../subscribeForm/SubscribeForm";
import ctaBgTop from "/assets/img/global/cta-bg-top.png";
import ctaBgBottom from "/assets/img/global/cta-bg-bottom.png";
import Reveal from "../../animation/Reveal";

 

const Cta = () => {
  return (
    <section 
      className="cta bg-lightGrayishWhite">
      <div className="container py-20">
        {/* CTA Box */}
        <div
          className="bg-primary rounded-[32px] py-16 px-4 relative overflow-hidden"
        >
          {/* Subtitle */}
          <Subtitle subTitle="Pricing" color="text-softWhite" bgColor="bg-primary" borderColor="border-blueGray" />

          {/* Title */}
          <Title title="Value Packed Newsletter" size="text-4xl lg:text-5xl" fontWeight="font-medium" color="text-softWhite" />

          {/* Description */}
          <Description text="Subscribe to our newsletter for big updates before everyone else, and yeah, you can unsubscribe anytime!" color="text-softWhite opacity-60" />

          {/* Subscription Form */}
          <Reveal>
          <div className="mt-12 flex justify-center">
            <SubscribeForm textColor='text-softWhite' formWidth="w-[100%] md:w-[80%] lg:w-[50%]" btnBg="bg-limeGreen" btnText="Get Started" formBg="bg-primary" btnColor="text-primary" borderColor="border-davyGray" />
          </div>
          </Reveal>

          {/* Floating Background Images */}
          <motion.img 
            className="absolute -top-10 md:top-0 right-2 z-0"
            src={ctaBgTop}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -10, 0] }} // Floating effect
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            className="absolute -bottom-16 md:-bottom-14 lg:bottom-0 z-0"
            src={ctaBgBottom}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, 10, 0] }} // Floating effect
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;