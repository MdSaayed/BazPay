import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../ui/Button";
import LoadingAnimation from "../loadingAnimation/LoadingAnimation";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Reveal from "../../animation/Reveal";
import { useLoading } from "../../context/LoadingContext";

const PricingCard = () => {
  const [data, setData] = useState([]); // State to hold the pricing data
  const [error, setError] = useState(""); // State to handle any errors during the fetch
  const { isLoading, startLoading, stopLoading } = useLoading(); // State to manage loading state

  // Fetch Data when the component mounts
  useEffect(() => {
    startLoading(); 

    // Fetch pricing data from the JSON file
    fetch("/pricingV1.json")
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) throw new Error(`Failed to fetch pricing data: ${res.statusText}`);
        return res.json(); // Parse the response as JSON
      })
      .then((data) => {
        setData(data); // Set the pricing data into state
        stopLoading(); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error if the fetch fails
        stopLoading(); // Set loading to false if there was an error
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Conditional rendering for loading or error state
  if (isLoading) return <LoadingAnimation />; // Show loading animation while fetching data
  if (error) return <ErrorMessage error={error} />; // Show error message if fetch fails

  return (
    <>
      {/* Map over each pricing item and display it */}
        {data?.map((item,idx) => (
          <Reveal  key={item?.id || idx}>
            <div className="bg-white rounded-3xl h-full relative z-10">
              {/* Card Header */}
              <div
                className={`${
                  item?.highlighted ? 'bg-primary' : 'bg-davyGray' // Apply highlight color if highlighted
                } rounded-3xl p-8`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-softWhite">{item?.title}</span>
                  {/* Show "Popular" tag if the item is highlighted */}
                  {item?.highlighted && (
                    <span className="bg-lightGreen text-primary text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span> 
                  )}
                </div>
                {/* Price and Duration */}
                <div className="flex items-end gap-1 mt-4">
                  <h3 className="text-4xl lg:text-5xl font-semibold text-softWhite">
                    <span>$</span> 
                    <span>{item?.price?.monthly ? item?.price?.monthly : item?.price?.annual}</span> 
                  </h3>
                  <span className="font-medium text-base text-softWhite">
                    {item?.price?.monthly ? "Per Month" : "Per Year"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-whiteSmoke text-base font-normal mt-6 mb-8">{item?.excerpt}</p>

                {/* "Get Started" Button */}
                <Button text="Get Started" link={`/pricing/${item?.id}`} fullWidth={true} />
              </div>

              {/* Card Features */}
              <div className="p-8">
                <p className="text-primary text-base font-semibold">FEATURES</p>
                <p className="text-davyGray text-base font-normal mt-1 mb-6">
                  {item?.featureDesc}
                </p>

                {/* Loop through the features and display each one */}
                <ul>
                  {item?.features?.monthly?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 mb-4">
                      {/* Check icon for features */}
                      <FaRegCircleCheck className="text-davyGray text-xl" />
                      <span className="font-normal text-base text-davyGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
    </>
  );
};

export default PricingCard;
