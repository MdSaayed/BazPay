import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import MonthlyRevenue from "/assets/img/features/monthly-revenue.png";
import BarLine from "/assets/img/features/bar-line.png";
import SendMoneyRevenue from "/assets/img/features/send-money-revenue.png";
import MasterCard from "/assets/img/features/master-card.png";
import LiveAlytics from "/assets/img/features/live-analytics.png";
import ShieldIcon from "/assets/icons/card-icon-payout.svg";
import GraphIcon from "/assets/icons/light-icon-payout.svg";
import Reveal from "../../animation/Reveal";

const SecuritySection = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-10 lg:py-24">

        {/* Subtitle */}
          <Subtitle subTitle="Security and Insights" borderColor="border-blue" bgColor="bg-blue" />
        {/* Title */}
          <Title title="Stay Secure and Gain Financial Insights" maxWidth="max-w-[768px] mx-auto" />
        {/* Description */}
        <Description
          text="BazPay offers top-tier security features along with detailed financial insights to help you make informed decisions and keep your transactions safe."
          maxWidth="max-w-[768px] mx-auto"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Left Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card One - Advanced Security */}
              <Reveal>
              <div className="h-full bg-lightAloe p-4 rounded-2xl shadow-sm">
                <img src={MonthlyRevenue} alt="Advanced Security" />
                <div className="my-4">
                  <h4 className="text-primary font-semibold text-xl">Advanced Security</h4>
                  <p className="text-primary text-base font-roboto mt-2">Your transactions are encrypted with bank-level security to protect your data.</p>
                </div>
              </div>
              </Reveal>

              {/* Card Two - Smart Insights */}
              <Reveal>
                <div className="h-full bg-lightLavender p-4 rounded-2xl shadow-sm">
                  <img src={LiveAlytics} alt="Live Alytics" />
                  <div className="my-4">
                    <h4 className="text-primary font-semibold text-xl">Smart Insights</h4>
                    <p className="text-primary text-base font-roboto mt-2">Gain deep financial insights to track spending and optimize your budget.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                {/* Card Three - Budgeting Tools */}
                <div className="h-full bg-lightLavender p-4 rounded-2xl shadow-sm">
                  {/* Icon */}
                  <div className="mb-3">
                    <img className="bg-linenWhite rounded p-3 w-12 h-12" src={ShieldIcon} alt="Revenue" />
                  </div>
                  {/* Title */}
                  <div className="my-4">
                    <h4 className="text-primary font-semibold text-xl">Manage Your Budget Efficiently</h4>
                  </div>
                  {/* Image */}
                  <img src={MasterCard} alt="Financial Growth" />
                </div>
              </Reveal>

                {/* Card Four - Secure Financial Growth */}
              <Reveal>
                <div className="h-full bg-lightAloe p-4 rounded-2xl shadow-sm">
                  {/* Icon */}
                  <div className="mb-3">
                    <img className="bg-linenWhite rounded p-3 w-12 h-12" src={GraphIcon} alt="Shield Icon" />
                  </div>
                  {/* Title */}
                  <div className="my-4">
                    <h4 className="text-primary font-semibold text-xl">Secure Financial Growth</h4>
                  </div>
                  {/* Image */}
                  <img src={SendMoneyRevenue} alt="Financial Growth" />
                </div>
              </Reveal>
            </div>
          

          {/* Right Side Big Card - Mobile Banking Security */}
          <Reveal>
            <div className="bg-primary h-full text-white p-5 rounded-3xl">
              <img src={BarLine} className="mt-12" alt="Bar Line" />
              <div className="mt-20">
                <h3 className="text-3xl text-softWhite font-semibold">Mobile Banking with Full Protection</h3>
                <p className="text-softWhite text-base my-4">Enjoy seamless mobile banking with end-to-end encryption, making your transactions secure and reliable.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;