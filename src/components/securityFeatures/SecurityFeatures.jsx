import React from "react";
import { motion } from "framer-motion";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import { HiOutlineFingerPrint } from "react-icons/hi2";
import { SiSecurityscorecard } from "react-icons/si";

/** Animation Variants **/
const fadeUp = {
  hidden: { opacity: 0, y: 30 }, // Starts slightly below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};


const SecurityFeatures = () => {
  return (
    <motion.section
      className="bg-lightGrayishWhite"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
      variants={staggerContainer}
    >
      <div className="container py-24">
        {/* Subtitle */}
        <motion.div variants={fadeUp}>
          <Subtitle subTitle="Security" bgColor="bg-paleGreen" borderColor="border-whiteSmoke" />
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeUp}>
          <Title title="Secured with awesome security measures!" maxWidth="max-w-[800px]" />
        </motion.div>

        {/* Security Cards Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {/* Card One */}
          <motion.div className="bg-white px-5 py-8 rounded-2xl" variants={fadeUp}>
            <motion.div variants={iconPop}>
              <HiOutlineFingerPrint className="bg-limeGreen text-[60px] p-3 rounded-2xl text-white" />
            </motion.div>
            <div className="mt-6">
              <h3 className="mb-2 text-primary font-semibold text-2xl">Your assets insured</h3>
              <p className="text-base text-davyGray">
                Manage all your bank accounts in one place with a single dashboard.
              </p>
            </div>
          </motion.div>

          {/* Card Two */}
          <motion.div className="bg-white px-5 py-8 rounded-2xl" variants={fadeUp}>
            <motion.div variants={iconPop}>
              <MdOutlineNotificationsActive className="bg-limeGreen text-[60px] p-3 rounded-2xl text-primary" />
            </motion.div>
            <div className="mt-6">
              <h3 className="mb-2 text-primary font-semibold text-2xl">Instant Notifications</h3>
              <p className="text-base text-davyGray">
                Stay informed with real-time alerts for transactions, updates, and account activities.
              </p>
            </div>
          </motion.div>

          {/* Card Three */}
          <motion.div className="bg-white px-5 py-8 rounded-2xl" variants={fadeUp}>
            <motion.div variants={iconPop}>
              <SiSecurityscorecard className="bg-primary text-[60px] p-3 rounded-2xl text-white" />
            </motion.div>
            <div className="mt-6">
              <h3 className="mb-2 text-primary font-semibold text-2xl">Zero Hidden Fees</h3>
              <p className="text-base text-davyGray">
                Enjoy clear pricing with no hidden fees—just honest rates.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SecurityFeatures;
