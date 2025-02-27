import { Check } from "lucide-react";
import Description from './../description/Description';
import Title from './../title/Title';
import { useState } from "react";

const PRICING_OPTIONS = [
  {
    name: "Basic Plan",
    description: "Everything in our free plan plus",
    featuresTitle: "FEATURES",
    featuresDescription: "Our most popular plan for small teams.",
    price: 10,
    theme: "light",
    isPopular: false,
    features: [
      "All Starter Plan features",
      "Basic reporting + analytics",
      "Up to 10 individual users",
      "Unlimited team members",
      "Workflow automation",
      "Premium integrations",
      "All Pro Plan features",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
  {
    name: "Business Plan",
    description: "Customized solutions for larger organizations.",
    featuresTitle: "FEATURES",
    featuresDescription: "Advanced features and reporting.",
    price: 20,
    theme: "dark",
    isPopular: true,
    features: [
      "All Pro Plan features",
      "Basic reporting + analytics",
      "Dedicated account manager",
      "Custom integrations",
      "Onboarding and training",
      "Unlimited team members",
      "Workflow automation",
      "Premium integrations",
      "Priority support",
      "Custom integrations",
    ],
  },
];

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);


    return (
        <section className="bg-lightGrayishWhite">
            <div className="container py-24">
                <div className="flex justify-center">
                    <span className='text-[#535862] font-medium text-sm leading-normal bg-[#ECFFCD] px-4 py-2 rounded-3xl'>Pricing</span>
                </div>
                <Title title={<>Plans that fit <span className="text-limeGreen">your scale</span></>} />
                <Description text={<>Simple, transparent pricing that grows with you. Try<br/> any plan free for 30 days.</>} />

                {/* Pricing Filter */}
                <div className="flex items-center justify-center py-6">
                    <div className="relative flex items-center bg-[#F9F9F6] rounded-full p-1 shadow-md">
                        {/* Monthly Billing Button */}
                        <button
                        onClick={() => handleToggle("monthly")}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                            !isAnnual ? "bg-[#181D27] text-white shadow" : "text-gray-600"
                        }`}
                        >
                        Monthly billing
                        </button>

                        {/* Annual Billing Button */}
                        <button
                        onClick={() => handleToggle("annual")}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                            isAnnual ? "bg-[#181D27] text-white shadow" : "text-gray-600"
                        }`}
                        >
                        Annual billing
                        </button>

                        {/* Save 20% Label (Only visible for Annual billing) */}
                        {isAnnual && (
                        <span className="absolute right-2 text-xs text-gray-600 bg-white px-2 py-1 rounded-full">
                            Save 20%
                        </span>
                        )}
                    </div>
                </div>
                        
                {/* Pricing Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 rounded-3xl bg-[#F0EEF4] mt-20">
                    {/* Mapping Pricing */}
                    {PRICING_OPTIONS.map((plan, index) => (
                        <div key={index} className={`pricing-card rounded-2xl py-8 ${plan.theme === "dark" ? "bg-[#181D27] text-softWhite" : "text-[#414651]"}`}>
                            <div className="flex justify-between flex-wrap gap-4 items-start px-8">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-2xl font-bold">{plan.name}</h2>
                                        {plan.isPopular && (
                                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white">Popular</span>
                                        )}
                                    </div>
                                    <p className="text-sm mb-4">{plan.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-4xl font-medium">$</span>
                                    <span className="text-5xl font-medium">{plan.price}</span>
                                    <span className="ml-2 text-base opacity-80">per month</span>
                                </div>
                            </div>
                            <div className={`feature-list py-8 border-y px-8 mt-2 ${plan.theme === "dark" ? "border-[#252B37]" : "border-lightSilver"}`}>
                                <h2 className="text-base font-semibold">{plan.featuresTitle}</h2>
                                <p className="text-base">{plan.featuresDescription}</p>
                                <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="feature-item flex items-center gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-base leading-normal font-normal">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="px-8">
                                <button className={`get-started-btn block w-full rounded-3xl p-2 mt-8 ${plan.theme === "dark" ? "bg-lightGreen text-primary border border-lightGreen" : "bg-transparent text-primary border border-primary"}`}>
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
