import React, { useEffect, useState } from 'react';
import CheckIcon from "/assets/icons/check-compare.svg";
import CloseIcon from "/assets/icons/close-compare.svg";
import Button from '../ui/Button';
import ErrorMessage from '../errorMessage/ErrorMessage';
import LoadingAnimation from '../loadingAnimation/LoadingAnimation';
import Reveal from '../../animation/Reveal';
import { useLoading } from '../../context/LoadingContext';

const ComparePlans = () => {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(""); // State to handle any errors during the fetch
  const { isLoading, startLoading, stopLoading } = useLoading(); // State to manage loading state
  const [selectedDuration, setSelectedDuration] = useState("monthly"); // Default to monthly

  // Fetch Data when the component mounts
  useEffect(() => {
    startLoading();

    fetch("/pricingV1.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch pricing data: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setPlans(data);
        stopLoading();
      })
      .catch((error) => {
        setError(error.message);
        stopLoading();
      });
  }, []);

  // Extract all unique features from plans (for both monthly and annual)
  const allFeatures = plans?.flatMap((plan) => [
    ...(plan?.features?.monthly || []),
    ...(plan?.features?.annual || []),
  ]);
  const featureConfig = [...new Set(allFeatures)]; // Remove duplicates

  // Conditional rendering for loading or error state
  if (isLoading) return <LoadingAnimation />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-20">
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold text-center mb-16">Compare Plans</h2>

        {/* Pricing Cards Grid */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-end gap-8">
            {plans?.map((plan,idx) => (
              <div  key={plan?.id}  className="bg-white rounded-lg p-8 min-w-full md:min-w-[250px]">
                <h3 className="text-2xl text-center font-bold mb-2">{plan?.title}</h3>

                {/* Showing Price Conditionally */}
                <div className="flex items-center justify-center">
                  <p className="text-4xl font-bold mb-6">
                    <span>$</span>
                    <span>{selectedDuration === "monthly" ? plan?.price?.monthly : plan?.price?.annual}</span>
                    <span className="text-lg font-medium text-gray-600">
                      {selectedDuration === "monthly" ? " /mon" : " /year"}
                    </span>
                  </p>
                </div>

                <Button
                  text="View Details"
                  bgColor={`${idx == 0? 'bg-lightGreen' :'bg-lightSilver'} `}
                  hoverBgColor="hover:bg-lightGreen"
                  border="border-lightSilver"
                  hoverBorder="hover:border-lightGreen"
                  fullWidth={true}
                  link={`/pricing/${plan?.id}`}
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto mt-10">
          <div className="min-w-[600px]">
            <Reveal>
              <h3 className="text-3xl font-semibold text-primary my-8">Feature Comparison</h3>
            </Reveal>

            {/* Feature Rows */}
            <div className='overflow-hidden'>
              {featureConfig?.map((feature, idx) => (
                <Reveal key={idx}>
                  <div className={`grid grid-cols-4 gap-4 px-6 py-4 rounded ${idx % 2 === 0 ? 'bg-lightAloe' : ''}`}>
                    <div className="font-medium min-w-[200px]">{feature}</div>
                    {plans?.map((plan) => (
                      <div key={`${plan?.id}-${idx}`} className="text-base font-normal text-primary min-w-[150px] text-center">
                        {plan?.features?.[selectedDuration]?.includes(feature) ? (
                          <img src={CheckIcon} alt="Included" className="h-6 w-6 mx-auto" />
                        ) : (
                          <img src={CloseIcon} alt="Not included" className="h-6 w-6 mx-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
