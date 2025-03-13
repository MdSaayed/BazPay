import React from "react";
import { motion } from "framer-motion";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import SubscribeForm from "../subscribeForm/SubscribeForm";
import ctaBgTop from "/assets/img/global/cta-bg-top.png";
import ctaBgBottom from "/assets/img/global/cta-bg-bottom.png";

/** Animation Variants **/
const fadeUp = {
  hidden: { opacity: 0, y: 40 }, // Start off-screen
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const Cta = () => {
  return (
    <motion.section 
      className="cta bg-lightGrayishWhite"
      initial="hidden"
      whileInView="visible" // Triggers animation on scroll
      viewport={{ once: false, amount: 0.2 }} // Animate every time section enters viewport
      variants={staggerContainer}
    >
      <div className="container py-20">
        {/* CTA Box */}
        <motion.div
          className="bg-primary rounded-[32px] py-16 px-4 relative overflow-hidden"
          variants={fadeUp}
        >
          {/* Subtitle */}

          <Subtitle subTitle="Pricing" color="text-softWhite" bgColor="bg-primary" borderColor="border-blueGray" />

          {/* Title */}
          <Title title="Value Packed Newsletter" size="text-4xl lg:text-5xl" fontWeight="font-medium" color="text-softWhite" />

          {/* Description */}
          <Description text="Subscribe to our newsletter for big updates before everyone else, and yeah, you can unsubscribe anytime!" color="text-softWhite opacity-60" />

          {/* Subscription Form */}
          <motion.div className="mt-12 flex justify-center" variants={fadeUp}>
            <SubscribeForm textColor='text-softWhite' formWidth="w-[100%] md:w-[80%] lg:w-[50%]" btnBg="bg-limeGreen" btnText="Get Started" formBg="bg-primary" borderColor="border-davyGray" />
          </motion.div>

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
            className="absolute -bottom-10 md:bottom-0 z-0"
            src={ctaBgBottom}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cta;
