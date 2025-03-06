import React from 'react';
import CheckIcon from "/assets/icons/check-compare.svg";
import CloseIcon from "/assets/icons/close-compare.svg";
import Button from '../ui/Button';

const ComparePlans = () => {
  // Plan configurations
  const plans = [
    { name: 'Basic', price: '$19/mo', features: [0, 2, 4, 6, 8] },
    { name: 'Business', price: '$99/mo', features: [0, 1, 2, 3, 4, 5, 6, 8] },
    { name: 'Enterprise', price: '$409/mo', features: Array.from({ length: 9 }, (_, i) => i) },
  ];

  // Feature list
  const features = [
    'Email support', 'Realtime analytics', 'User analytics', 'Funnel optimization', 
    'Automated', 'Collaboration tools', 'Advanced charts', 'Team goal setting', 
    'Real-time team reports'
  ];

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-20">
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold text-center mb-16">Compare Plans</h2>

        {/* Pricing Cards Grid */}
        <div className="flex flex-wrap items-center justify-end gap-8">
            {plans.map((plan) => (
                <div key={plan.name} className={`border rounded-lg p-8 block min-w-1/2 md:min-w-[200px]'}`}>
                    <h3 className="text-2xl text-center font-bold mb-2">{plan.name}</h3>
                    <p className="text-4xl text-center font-bold mb-6">{plan.price}</p>
                    <Button text='Add to card' fullWidth={true} />
                </div>
            ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
        <div className="min-w-[600px]">
            <h3 className="text-3xl font-semibold text-primary my-8">Feature Category</h3>

            {/* Feature Rows */}
            {features.map((feature, idx) => (
            <div key={feature} className={`grid grid-cols-4 gap-4 px-6 py-4 rounded ${idx % 2 === 0 ? 'bg-[#F8FFEE]' : ''}`}>
                <div className="font-medium min-w-[200px]">{feature}</div>
                {plans.map((plan) => (
                <div key={`${plan.name}-${idx}`} className="text-base font-normal text-primary min-w-[150px]">
                    {plan.features.includes(idx) ? (
                    <img src={CheckIcon} alt="Included" className="h-6 w-6 mx-auto" />
                    ) : (
                    <img src={CloseIcon} alt="Not included" className="h-6 w-6 mx-auto" />
                    )}
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
