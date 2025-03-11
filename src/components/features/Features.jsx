import React from "react";
import { motion } from "framer-motion";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import SecurityImg from "/assets/img/global/status-payout.png";
import InsightsImg from "/assets/img/global/balance-payout.png";
import BudgetingImg from "/assets/img/global/status-payout.png";
import GrowthImg from "/assets/img/global/status-payout.png";
import MobileBankingImg from "/assets/img/global/dashboard-payout.png";
import ShieldIcon from "/assets/icons/card-icon-payout.svg";
import GraphIcon from "/assets/icons/light-icon-payout.svg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 }, // Items start 20px below their normal position
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0 } },
};


const SecuritySection = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-28">
        {/* Section Header - Keep its own animation */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Subtitle subTitle="Security and Insights" borderColor="border-blue" bgColor="bg-blue" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Title title="Stay Secure and Gain Financial Insights" maxWidth="max-w-[768px] mx-auto" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Description
              text="BazPay offers top-tier security features along with detailed financial insights to help you make informed decisions and keep your transactions safe."
              maxWidth="max-w-[768px] mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Features Grid - Individual item animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Left Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card One */}
            <motion.div 
              className="bg-lightBlue p-4 rounded-2xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              <motion.img src={SecurityImg} alt="Advanced Security" variants={iconPop} />
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Advanced Security</h4>
                <p className="text-primary text-base font-roboto mt-2">Your transactions are encrypted with bank-level security to protect your data.</p>
              </div>
            </motion.div>

            {/* Card Two */}
            <motion.div 
              className="bg-lightYellow p-4 rounded-2xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              <motion.img src={InsightsImg} alt="Smart Insights" variants={iconPop} />
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Smart Insights</h4>
                <p className="text-primary text-base font-roboto mt-2">Gain deep financial insights to track spending and optimize your budget.</p>
              </div>
            </motion.div>

            {/* Card Three */}
            <motion.div 
              className="bg-lightYellow p-4 rounded-2xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
            >
              <motion.div className="mb-3" variants={iconPop}>
                <img className="bg-linenWhite rounded p-3 w-12 h-12" src={GraphIcon} alt="Graph Icon" />
              </motion.div>
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Manage Your Budget Efficiently</h4>
              </div>
              <motion.img src={BudgetingImg} alt="Budgeting Tools" variants={iconPop} />
            </motion.div>

            {/* Card Four */}
            <motion.div 
              className="bg-lightBlue p-4 rounded-2xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              <motion.div className="mb-3" variants={iconPop}>
                <img className="bg-linenWhite rounded p-3 w-12 h-12" src={ShieldIcon} alt="Shield Icon" />
              </motion.div>
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Secure Financial Growth</h4>
              </div>
              <motion.img src={GrowthImg} alt="Financial Growth" variants={iconPop} />
            </motion.div>
          </div>

          {/* Right Side Big Card */}
          <motion.div 
            className="bg-primary text-white p-5 rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <motion.img src={MobileBankingImg} className="mt-12" alt="Mobile Banking Security" variants={iconPop} />
            <div className="mt-20">
              <h3 className="text-3xl text-softWhite font-semibold">Mobile Banking with Full Protection</h3>
              <p className="text-softWhite text-base my-4">Enjoy seamless mobile banking with end-to-end encryption, making your transactions secure and reliable.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
