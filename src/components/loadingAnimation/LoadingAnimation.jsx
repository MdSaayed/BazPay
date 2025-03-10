import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LoadingAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data
    fetch("/loader.json") // Fetch from public folder
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  return (
    <>
      <div className="bg-black top-0 left-0 fixed w-full opacity-85 z-50">
        <div className="flex items-center justify-center h-screen">
          <Lottie animationData={animationData} loop={true} className="w-20 h-20" />
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;