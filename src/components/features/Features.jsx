import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import StatusImg from "/assets/img/global/status-payout.png";
import DashboardImg from "/assets/img/global/dashboard-payout.png";
import BalanceImg from "/assets/img/global/balance-payout.png";
import LineChartImg from "/assets/img/global/line-chart-payout.png";
import CardImg from "/assets/img/global/cards-payout.png";
import CardIcon from "/assets/icons/card-icon-payout.svg";
import LightIcon from "/assets/icons/light-icon-payout.svg";

const FeaturesSection = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-28">
        {/* Section Header */}
        <div className="text-center">
          {/* Subtitle with border and background color customization */}
          <Subtitle subTitle="Payout and Transactions" borderColor="border-paleGreen" bgColor="bg-paleGreen" />
          
          {/* Main Title */}
          <Title title="Work more efficiently with easy user access" maxWidth="max-w-[768px] mx-auto" />
          
          {/* Description of the section */}
          <Description
            text="BazPay improves your finances with quick transfers, budgeting tools, and robust security for investing, saving, and managing expenses."
            maxWidth="max-w-[768px] mx-auto"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Left Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card One - Multi-Account Management */}
            <div className="bg-lightAloe p-4 rounded-2xl shadow-sm">
              <img src={LineChartImg} alt="Multi-Account Management" />
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Multi-Account Management</h4>
                <p className="text-primary text-base font-roboto mt-2">View all your bank accounts in one dashboard, simplifying your financial management.</p>
              </div>
            </div>

            {/* Card Two - Live Analytics */}
            <div className="bg-lightLavender p-4 rounded-2xl shadow-sm">
              <img src={BalanceImg} alt="Live Analytics" />
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Live Analytics</h4>
                <p className="text-primary text-base font-roboto mt-2">Gain financial insights with interactive dashboards and reports for quick, data-driven decisions.</p>
              </div>
            </div>

            {/* Card Three - Live Analytics with Light Icon */}
            <div className="bg-lightLavender p-4 rounded-2xl shadow-sm">
              <div className="mb-3">
                <img className="bg-linenWhite rounded p-3 w-12 h-12" src={LightIcon} alt="Light Icon" />
              </div>
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Mastercard and credit cards are pretty handy!</h4>
              </div>
              <img src={CardImg} alt="Card Icon" />
            </div>

            {/* Card Four - Send money anywhere */}
            <div className="bg-lightAloe p-4 rounded-2xl shadow-sm">
              <div className="mb-3">
                <img className="bg-linenWhite rounded p-3 w-12 h-12" src={CardIcon} alt="Card Icon" />
              </div>
              <div className="my-4">
                <h4 className="text-primary font-semibold text-xl">Send money here to anywhere</h4>
              </div>
              <img src={StatusImg} alt="Status Image" />
            </div>
          </div>

          {/* Right Side Big Card - Secure Transfers */}
          <div className="bg-primary text-white p-5 rounded-3xl">
            <img src={DashboardImg} className="mt-12" alt="Secure Transfers" />
            <div className="mt-20">
              <h3 className="text-3xl text-softWhite font-semibold">Secure Transfers Anytime, Anywhere</h3>
              <p className="text-softWhite text-base my-4">Seamlessly send and receive payments with top-notch encryption, ensuring your money stays safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
