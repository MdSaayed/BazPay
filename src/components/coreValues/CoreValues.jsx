import React from 'react';
import PhoneImg from '/assets/img/global/phone-mockup-core-values.png';
import BadgeCheck from '/assets/icons/badge-check.svg';
import CustomerCentricity from '/assets/icons/customer-centricity.svg';
import VerifiedBadge from '/assets/icons/verified-badge.svg';
import Rocket from '/assets/icons/rocket-launch.svg';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';
import Reveal from '../../animation/Reveal';

const CoreValues = () => {
  
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        
        {/* Section Heading */}
        <Subtitle 
          subTitle="Core Values" 
          bgColor="bg-mintCream" 
          borderColor="border-whiteSmoke" 
        />
        <Title 
          title={<>What drives BazPay, our core <span>values</span></>} 
          maxWidth="max-w-xl lg:max-w-[650px]" 
        />
        <Description 
          text="At BazPay, our values shape everything we do, ensuring we deliver a platform that truly transforms how you manage your finances." 
        />
        
        {/* Grid Layout for Core Values */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column - Innovation & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            
            {/* Innovation */}
            <Reveal>
              <div>
                <div>
                  <img 
                    className="bg-lightLavender p-3 rounded-lg w-14 h-14" 
                    src={Rocket} 
                    alt="Innovation Icon"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mt-4 mb-6">
                    Innovation
                  </h3>
                  <p className="font-normal text-primary">
                    We strive to stay ahead by leveraging cutting-edge technology to create smarter, more efficient financial solutions.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Security */}
            <Reveal>
              <div>
                <div>
                  <img 
                    className="bg-lightLavender p-3 rounded-lg w-14 h-14" 
                    src={VerifiedBadge} 
                    alt="Security Icon"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mt-4 mb-6">
                    Security
                  </h3>
                  <p className="font-normal text-primary">
                    Your trust is our priority. We safeguard your financial data with top-notch encryption and fraud protection.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Center Image - Phone Mockup */}
          <div className="lg:col-span-2">
            <Reveal>
              <img 
                className="w-full h-full object-contain rounded-3xl" 
                src={PhoneImg} 
                alt="BazPay Mobile Interface"
              />
              </Reveal>
          </div>

          {/* Right Column - Transparency & Customer-Centricity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            
          <Reveal>
            {/* Transparency */}
            <div>
              <div>
                <img 
                  className="bg-lightLavender p-3 rounded-lg w-14 h-14" 
                  src={BadgeCheck} 
                  alt="Transparency Icon"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-xl mt-4 mb-6">
                  Transparency
                </h3>
                <p className="font-normal text-primary">
                  No hidden fees, no surprises. We believe in clear and honest communication, ensuring you always stay informed.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            {/* Customer-Centricity */}
            <div>
              <div>
                <img 
                  className="bg-lightLavender p-3 rounded-lg w-14 h-14" 
                  src={CustomerCentricity} 
                  alt="Customer Centricity Icon"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-xl mt-4 mb-6">
                  Customer-Centricity
                </h3>
                <p className="font-normal text-primary">
                  Your success is our success. We design every feature and service with your needs in mind, delivering exceptional experiences.
                </p>
              </div>
            </div>
          </Reveal>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
