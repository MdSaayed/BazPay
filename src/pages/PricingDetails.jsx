import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from './../components/title/Title';
import CtaV1 from '../components/cta/CtaV2';
import Button from './../components/ui/Button';
import LoadingAnimation from '../components/loadingAnimation/LoadingAnimation';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Reveal from '../animation/Reveal';

const PricingDetails = () => {
  const pricingData = useLoaderData(); // Get data from the loader
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  const [selectedDuration, setSelectedDuration] = useState("monthly"); // Default selection for pricing duration

  useEffect(() => {
    // Simulating a loading state based on the fetched data (mocked here)
    if (pricingData) {
      setLoading(false); // Set loading to false when data is available
    } else {
      setError("Failed to load data.");
      setLoading(false); // Stop loading even in case of error
    }
  }, [pricingData]);


  // Extract prices dynamically from JSON
  const monthlyPrice = pricingData?.price?.monthly || "N/A";
  const yearlyPrice = pricingData?.price?.annual || "N/A";
  const isMonthly = selectedDuration === "monthly";

  // Show loading animation until the data is loaded
  if (loading) return <LoadingAnimation />;
  
  // Show error message if there's an issue with the data
  if (error) return <ErrorMessage error={error} />;



  return (
    <> 
      {/* Pricing Details Section */}
      <section className="bg-lightGrayishWhite">
        <div className="container py-10 lg:py-24">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
              
              {/* Left Column - Features List */}
              <div className="md:col-span-2">
                <div>
                  <Title title={pricingData?.title} textAlign='text-left' />
                  <div className="mt-8">
                    {/* Features List */}
                    <ul className="space-y-4 list-none">
                      {pricingData?.features?.[selectedDuration]?.map((item, index) => (
                        <li key={index} className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Plan Description */}
                <div className="mt-20">
                  <h3 className="text-davyGray text-3xl font-semibold mb-4">Inclusive Plans</h3>
                  <p className="text-base font-normal text-davyGray">
                    {pricingData?.description}
                  </p>
                </div>
              </div>

              {/* Right Column - Pricing Card */}
              <div className="order-first xl:order-last">
                <div className="bg-white rounded-lg card-shadow px-10 py-12 border border-gray-100">
                  <span className="text-lg text-primary font-normal">Get Your Plan Today</span>
                  <h3 className="text-4xl text-primary font-semibold my-4">
                    ${isMonthly ? monthlyPrice : yearlyPrice} USD
                  </h3>
                  
                  <div>
                    <p className="font-bold text-lg text-primary">{isMonthly ? "Monthly" : "Yearly"}</p>
                    <p className="text-base font-normal text-davyGray mt-3">
                      {isMonthly ? `or ${yearlyPrice} USD yearly` : `or ${monthlyPrice} USD per month`}
                    </p>
                  </div>

                  {/* Plan Duration Selector */}
                  <div className="space-y-4 my-6">
                    <select
                      className="w-full px-0 py-1 border-b bg-transparent border-gray-300 text-davyGray text-lg font-medium focus:outline-none"
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="annual">Yearly</option>
                    </select>
                  </div>

                  {/* Add to Cart Button */}
                  <Button text="Buy Now" fullWidth={true} link="/checkout" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <CtaV1 />
    </>
  );
};

export default PricingDetails;
