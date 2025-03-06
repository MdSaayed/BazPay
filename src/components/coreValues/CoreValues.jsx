import React from 'react';
import PhoneImg from '/assets/img/global/phone-mockup-core-values.png';
import BadgeCheck from '/assets/icons/badge-check.svg';
import CustomerCentricity from '/assets/icons/customer-centricity.svg';
import VrifiedBadge from '/assets/icons/vrified-badge.svg';
import Rocket from '/assets/icons/rocket-lunch.svg';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';

const CoreValues = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        <Subtitle subTitle='Core Values' bgColor='bg-[#FBFEF7]' borderColor=' border-[#F5F5F5]' />
        <Title title={<>What drives MezPay  our core <span>values</span></>} maxWidth='max-w-[560px]' />
        <Description text='At MezPay, our values shape everything we do, ensuring we deliver a platform that truly transforms how you manage your finances.' />
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12'>
            {/* Innovation */}
            <div className=''>
                <div>
                    <img className='bg-[#F0EEF4]  p-3 rounded-lg w-14 h-14' src={Rocket} />
                </div>
                <div>
                    <h3 className="font-semibold text-primary text-xl mt-4 mb-6">Innovation</h3>
                    <p className="font-normal text-primary">
                        We strive to stay ahead by leveraging cutting-edge technology to create smarter, more efficient financial solutions.
                    </p>
                </div>
            </div>

            {/* Security */}
            <div className=''>
                <div>
                    <img className='bg-[#F0EEF4]  p-3 rounded-lg w-14 h-14' src={VrifiedBadge} />
                </div>
                <div>
                    <h3 className="font-semibold text-primary text-xl mt-4 mb-6">Security</h3>
                    <p className="font-normal text-primary">
                        Your trust is our priority. We safeguard your financial data with top-notch encryption and fraud protection.
                    </p>
                </div>
            </div>
          </div>
          {/* Image */}
          <div className='lg:col-span-2'>
            <img className='w-full h-full object-cover rounded-3xl' src={PhoneImg} alt='Phone Image' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12'>
            {/* Transparency */}
            <div className=''>
                <div>
                    <img className='bg-[#F0EEF4]  p-3 rounded-lg w-14 h-14' src={BadgeCheck} />
                </div>
                <div>
                    <h3 className="font-semibold text-primary text-xl mt-4 mb-6">Transparency</h3>
                    <p className="font-normal text-primary">
                         No hidden fees, no surprises. We believe in clear and honest communication, ensuring you know exactly.
                    </p>
                </div>
            </div>

            {/* Customer-Centricity */}
            <div className=''>
                <div>
                    <img className='bg-[#F0EEF4]  p-3 rounded-lg w-14 h-14' src={CustomerCentricity} />
                </div>
                <div>
                    <h3 className="font-semibold text-primary text-xl mt-4 mb-6">Customer-Centricity</h3>
                    <p className="font-normal text-primary">
                        Your success is our success. We design every feature and service with your needs in mind, delivering exceptional.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;