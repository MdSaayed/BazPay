import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import StatusImg from "/assets/img/global/status-payout.png";
import DashboardImag from "/assets/img/global/dashboard-payout.png";
import BalanceImg from "/assets/img/global/balance-payout.png";
import LineChartImg from "/assets/img/global/line-chart-payout.png";
import CardImg from "/assets/img/global/cards-payout.png";
import CardIcon from "/assets/icons/card-icon-payout.svg";
import LightIcon from "/assets/icons/light-icon-payout.svg";

const FeaturesSection = () => {

  return (
    <section className=" bg-lightGrayishWhite">
      <div className="container py-28">        
        <Subtitle subTitle='Payout and Transitions' borderColor='border-[#ECFFCD]' bgColor='bg-[#ECFFCD]' />
        <Title title='Work more efficiently with easy user access' maxWidth="max-w-[768px]" />
        <Description 
          text="MezPay improves your finances with quick transfers, budgeting tools, and robust
          security for investing, saving, and managing expenses."  
          maxWidth="max-w-[768px]" 
        />
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Card One */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FFEE] p-4 rounded-2xl  shadow-sm">
              <img src={LineChartImg} alt="" />
              <div className="mt-4">
                <h4 className="text-primary font-semibold text-xl">Multi-Account Management</h4>
                <p className="text-primary text-base font-roboto mt-2">View all your bank accounts in one dashboard, simplifying your financial management.</p>
              </div>
            </div>

            {/* Card Two */}
            <div className="bg-[#F0EEF4] p-4 rounded-2xl  shadow-sm">
              <img src={BalanceImg} alt="" />
              <div className="mt-4">
                <h4 className="text-primary font-semibold text-xl">Live Analytics</h4>
                <p className="text-primary text-base font-roboto mt-2">Gain financial insights with interactive dashboards and reports for quick, data-driven decisions.</p>
              </div>
            </div>

            {/* Card Three */}
            <div className="bg-[#F0EEF4] p-4 rounded-2xl  shadow-sm">
              <div  className="mb-3">
                <img className="bg-[#FFFFFB] rounded p-3 w-12 h-12" src={LightIcon} alt="" />
              </div>
              <div className="mt-4">
                <h4 className="text-primary font-semibold text-xl">Live Analytics</h4>
              </div>
              <img src={CardImg} alt="" />
            </div>

            {/* Card Four */}
            <div className="bg-[#F8FFEE] p-4 rounded-2xl shadow-sm">
              <div  className="mb-3">
                <img  className="bg-[#FFFFFB] rounded p-3 w-12 h-12" src={CardIcon} alt="" />
              </div>
              <div className="mt-4">
                <h4 className="text-primary font-semibold text-xl">Send money here  to anywhere</h4>
              </div>
              <img src={StatusImg} alt="" />
            </div>
          </div>
          <div className="bg-primary text-white p-5 rounded-3xl">
            <img src={DashboardImag} alt="" />
            <div className="mt-20">
              <h3 className="text-3xl text-softWhite font-semibold">Secure Transfers Anytime, Anywhere</h3>
              <p className="text-softWhite text-base mt-4">Seamlessly send and receive payments with top-notch encryption, ensuring your money stays safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;