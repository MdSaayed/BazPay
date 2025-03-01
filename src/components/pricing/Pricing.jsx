import { useState } from "react";
import { RxCheck } from "react-icons/rx";
import Description from "../description/Description";
import Title from "../title/Title";

const PRICING_OPTIONS = [
  {
    name: "Basic Plan",
    description: "Essential tools to get started.",
    featuresTitle: "FEATURES",
    featuresDescription: "Perfect for individuals and small businesses.",
    monthlyPrice: 12,
    annualPrice: 9,
    isPopular: false,
    features: {
      monthly: [
        "Access to all core features",
        "5GB Cloud Storage",
        "Basic analytics & reports",
        "Community support",
        "Limited integrations",
        "Standard security",
        "Mobile access",
        "Basic automation",
        "Single user account",
        "Regular updates",
        "Email notifications",
        "Basic API access"
      ],
      annual: [
        "Access to all core features",
        "50GB Cloud Storage",
        "Advanced analytics & reports",
        "Priority email support",
        "All premium integrations",
        "Enhanced security with SSL",
        "Offline mode support",
        "Workflow automation",
        "Team collaboration",
        "AI-powered insights",
        "Early feature access",
        "Dedicated account manager"
      ]
    }
  },
  {
    name: "Business Plan",
    description: "Advanced features for growing teams.",
    featuresTitle: "FEATURES",
    featuresDescription: "Best choice for businesses scaling rapidly.",
    monthlyPrice: 25,
    annualPrice: 19,
    isPopular: true,
    features: {
      monthly: [
        "Everything in Basic Plan",
        "10 Team Members",
        "10GB Cloud Storage",
        "Customizable templates",
        "Multi-device sync",
        "24/7 customer support",
        "Advanced API access",
        "Role-based permissions",
        "Custom reports",
        "Priority email support",
        "Advanced automation",
        "Scheduled backups"
      ],
      annual: [
        "Everything in Basic Plan",
        "Unlimited Team Members",
        "200GB Cloud Storage",
        "Advanced workflow automation",
        "AI-powered analytics",
        "Dedicated account manager",
        "SLA-backed uptime guarantee",
        "Unlimited API access",
        "White-label branding",
        "SSO & advanced security",
        "Custom onboarding",
        "Priority feature requests"
      ]
    }
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Pricing Header */}
        <div className="flex justify-center">
            <span className='text-[#535862] font-medium text-sm leading-normal bg-[#ECFFCD] px-4 py-2 rounded-3xl'>Pricing</span>
        </div>
        <Title title={<>Plans that fit <span className="text-limeGreen">your scale</span></>} />
        <Description text={<>Simple, transparent pricing that grows with you. Try<br/> any plan free for 30 days.</>} />


        {/* Pricing Toggle Button */}
        <div className="flex items-center justify-center mt-12">
          <div className="relative flex items-center bg-[#FBFEF7] gap-2 rounded-full p-2 shadow-md">
            <button 
              onClick={() => setIsAnnual(false)} 
              className={`px-4 py-2 text-base font-normal rounded-full transition-all ${!isAnnual ? "bg-primary text-white shadow" : "text-primary"}`}>
              Monthly billing
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              className={`px-4 py-2 text-base font-normal rounded-full transition-all ${isAnnual ? "bg-primary text-white shadow" : "text-primary"}`}>
              Annual billing
              <span className="text-xs ml-2 text-gray-600 bg-softWhite px-2 py-1 border border-[#F5F5F5] rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-6 py-8 rounded-3xl bg-[#F0EEF4] mt-20">
          {PRICING_OPTIONS.map((plan, index) => (
            <div 
              key={index} 
              className="group pricing-card rounded-2xl py-8 text-primary hover:bg-[#181D27] hover:text-softWhite transition-all cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex justify-between flex-wrap gap-4 items-start px-8">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                    {plan.isPopular && (
                      <span className="px-3 py-1 text-xs border text-primary group-hover:text-softWhite bg-limeGreen group-hover:bg-transparent border-[#ECFFCD] rounded-full transition-all">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-4">{plan.description}</p>
                </div>
                {/* Price */}
                <div className="flex items-center">
                  <span className="text-4xl font-medium">$</span>
                  <span className="text-5xl font-medium">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-base opacity-80">per month</span>
                  {isAnnual && <span className="ml-2 text-sm text-green-500">(Save 20%)</span>}
                </div>
              </div>

              {/* Features List */}
              <div className="feature-list py-8 border-y px-8 mt-2 border-lightSilver group-hover:border-[#252B37] transition-all">
                <h2 className="text-base font-semibold">{plan.featuresTitle}</h2>
                <p className="text-base">{plan.featuresDescription}</p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
                  {plan.features[isAnnual ? "annual" : "monthly"].map((feature, index) => (
                    <div key={index} className="feature-item flex items-start gap-2">
                      <RxCheck className="w-6 h-6 p-[2px] text-lg rounded-full flex-shrink-0 text-primary bg-[#FBFEF7] group-hover:text-lightGreen group-hover:bg-blueGray transition-all mr-3" />
                      <span className="text-base leading-normal font-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-8">
                <button className="get-started-btn block w-full rounded-3xl p-2 mt-8 text-primary group-hover:bg-lightGreen hover:text-primary border border-primary group-hover:border-lightGreen group-hover:bg-opacity-90 transition-all">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
