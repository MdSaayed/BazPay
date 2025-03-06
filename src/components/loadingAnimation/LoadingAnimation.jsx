import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LoadingAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Add the no-scroll class to the body when the component mounts
    document.body.classList.add("no-scroll");

    // Fetch the animation data
    fetch("/loader.json") // Fetch from public folder
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));

    // Cleanup function to remove the no-scroll class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      <div className="bg-black absolute top-0 left-0 w-full opacity-85">
        <div className="flex items-center justify-center h-screen">
          <Lottie animationData={animationData} loop={true} className="w-20 h-20" />
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;