import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import { HiOutlineFingerPrint } from "react-icons/hi2";
import { SiSecurityscorecard } from "react-icons/si";
import Reveal from "../../animation/Reveal";

const SecurityFeatures = () => {
  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">

        {/* Subtitle */}
        <Subtitle subTitle="Security" bgColor="bg-paleGreen" borderColor="border-whiteSmoke" />
        {/* Title */}
        <Title title="Secured with awesome security measures!" maxWidth="max-w-[800px]" />

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {/* Card One */}
          <Reveal>
          <div className="bg-white px-5 py-8 rounded-2xl">
            <div>
              <HiOutlineFingerPrint className="bg-limeGreen text-[60px] p-3 rounded-2xl text-white" />
            </div>
            <div className="mt-6">
              <h3 className="mb-2 text-primary font-semibold text-2xl">Your assets insured</h3>
              <p className="text-base text-davyGray">
                Manage all your bank accounts in one place with a single dashboard.
              </p>
            </div>
          </div>
          </Reveal>

          {/* Card Two */}
          <Reveal>
            <div className="bg-white px-5 py-8 rounded-2xl">
              <div>
                <MdOutlineNotificationsActive className="bg-limeGreen text-[60px] p-3 rounded-2xl text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-primary font-semibold text-2xl">Instant Notifications</h3>
                <p className="text-base text-davyGray">
                  Stay informed with real-time alerts for transactions, updates, and account activities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card Three */}
          <Reveal>
            <div className="bg-white px-5 py-8 rounded-2xl">
              <div>
                <SiSecurityscorecard className="bg-primary text-[60px] p-3 rounded-2xl text-white" />
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-primary font-semibold text-2xl">Zero Hidden Fees</h3>
                <p className="text-base text-davyGray">
                  Enjoy clear pricing with no hidden fees—just honest rates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
