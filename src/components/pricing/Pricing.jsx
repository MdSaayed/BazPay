import { useEffect, useState } from "react";
import { RxCheck } from "react-icons/rx";
import Description from "../description/Description";
import Title from "../title/Title";
import LoadingAnimation from "../loadingAnimation/LoadingAnimation";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [data, setData] = useState([]); // State to hold the pricing data
  const [error, setError] = useState(""); // State to handle any errors during the fetch
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch Data when the component mounts
  useEffect(() => {
    // Fetch pricing data from the JSON file
    fetch("/pricingV1.json")
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) throw new Error(`Failed to fetch pricing data: ${res.statusText}`);
        return res.json(); // Parse the response as JSON
      })
      .then((data) => {
        setData(data); // Set the pricing data into state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error if the fetch fails
        setLoading(false); // Set loading to false if there was an error
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Conditional rendering for loading or error state
  if (loading) return <LoadingAnimation />; // Show loading animation while fetching data
  if (error) return <ErrorMessage error={error} />; // Show error message if fetch fails

  return (
    <section className="bg-lightGrayishWhite">
      <div className="container py-24">
        {/* Pricing Header */}
        <div className="flex justify-center">
          <span className='text-davyGray font-medium text-sm leading-normal bg-paleGreen px-4 py-2 rounded-3xl'>Pricing</span>
        </div>
        <Title title={<>Plans that fit <span className="text-limeGreen">your scale</span></>} />
        <Description text={'Simple, transparent pricing that grows with you. Try any plan free for 30 days.'} maxWidth="max-w-[520px]" />

        {/* Pricing Toggle Button */}
        <div className="flex items-center justify-center mt-12">
          <div className="relative flex flex-wrap justify-center items-center bg-mintCream gap-2 rounded-3xl p-3 md:p-2">
            <button 
              onClick={() => setIsAnnual(false)} 
              className={`px-4 py-2 text-base font-normal rounded-full transition-all ${!isAnnual ? "bg-primary text-white shadow" : "text-primary"}`}
            >
              Monthly billing
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              className={`px-4 py-2 text-base font-normal rounded-full transition-all ${isAnnual ? "bg-primary text-white shadow" : "text-primary"}`}
            >
              Annual billing
              <span className="text-xs ml-2 text-gray-600 bg-softWhite px-2 py-1 border border-whiteSmoke rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-6 py-8 rounded-3xl bg-lightLavender mt-20">
          {data.slice(0,2).map((plan, index) => (
            <div 
              key={index} 
              className={`group pricing-card rounded-2xl py-8 text-primary hover:bg-primary hover:text-softWhite transition-all cursor-pointer`}
            >
              {/* Card Header */}
              <div className="flex justify-between flex-wrap gap-4 items-start px-8">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{plan.title}</h2>
                    {plan.isPopular && (
                      <span className="px-3 py-1 text-xs border text-primary group-hover:text-softWhite bg-limeGreen group-hover:bg-transparent border-paleGreen rounded-full transition-all">
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
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="ml-2 text-base opacity-80">per month</span>
                  {isAnnual && <span className="ml-2 text-sm text-green-500">(Save 20%)</span>}
                </div>
              </div>

              {/* Features List */}
              <div className="feature-list py-8 border-y px-8 mt-2 border-lightSilver group-hover:border-blueGray transition-all">
                <h2 className="text-base font-semibold">{plan.featuresTitle}</h2>
                <p className="text-base">{plan.featuresDescription}</p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
                  {plan.features[isAnnual ? "annual" : "monthly"].map((feature, index) => (
                    <div key={index} className="feature-item flex items-start gap-2">
                      <RxCheck className="w-6 h-6 p-[2px] text-lg rounded-full flex-shrink-0 text-primary bg-mintCream group-hover:text-lightGreen group-hover:bg-blueGray transition-all mr-3" />
                      <span className="text-base leading-normal font-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-8">
                <Link to={`/pricing/${plan?.id}`} className="get-started-btn text-center block w-full rounded-3xl p-2 mt-8 text-primary group-hover:bg-lightGreen hover:text-primary border border-primary group-hover:border-lightGreen group-hover:bg-opacity-90 transition-all">
                  Get started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
