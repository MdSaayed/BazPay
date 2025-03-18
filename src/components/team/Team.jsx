import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import LoadingAnimation from './../loadingAnimation/LoadingAnimation';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useLoading } from '../../context/LoadingContext';

const Team = () => {
  // State hooks for managing the data and status of team members
  const [members, setMembers] = useState([]);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [error, setError] = useState("");
  const [swiper, setSwiper] = useState(null); // Store swiper instance
  const swiperWrapperRef = useRef(null); // Ref to the swiper wrapper DOM element

  useEffect(() => {
    startLoading();

    // Fetch team members from the server
    fetch("/team.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team members"); // Check if the response is okay
        return res.json(); // Parse the response JSON
      })
      .then((data) => {
        setMembers(data || []); // Store the data in state
        stopLoading();//Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error message if fetching fails
        stopLoading(); // Stop loading on error
      });
  }, []); // Empty dependency array ensures this effect only runs once on mount

  // **IMMEDIATE PAUSE ON HOVER**
  useEffect(() => {
    // Ensure swiper instance and wrapper are available before proceeding
    if (!swiper || !swiperWrapperRef.current) return;

    const wrapper = swiperWrapperRef.current;

    // Stop autoplay immediately when the mouse enters the swiper container
    const stopAutoplay = () => {
      if (swiper) {
        swiper.autoplay.stop(); // Stop autoplay instantly
        swiper.setTranslate(swiper.getTranslate()); // Freeze position immediately (no smooth transition)
      }
    };

    // Start autoplay again when mouse leaves the swiper container
    const startAutoplay = () => {
      if (swiper) {
        swiper.slideTo(swiper.activeIndex, 0, false); // Jump to the current slide without transition
        swiper.autoplay.start(); // Resume autoplay
      }
    };

    // Add event listeners for mouse enter and leave
    wrapper.addEventListener("mouseenter", stopAutoplay); // Stop autoplay on hover
    wrapper.addEventListener("mouseleave", startAutoplay); // Resume autoplay on mouse leave

    // Cleanup function to remove event listeners when the component unmounts or swiper changes
    return () => {
      wrapper.removeEventListener("mouseenter", stopAutoplay);
      wrapper.removeEventListener("mouseleave", startAutoplay);
    };
  }, [swiper]); // Run this effect whenever the swiper instance is updated

  if (isLoading) return <LoadingAnimation />; // Show loading animation while fetching data
  if (error) return <ErrorMessage />; // Show error message if fetching fails
  

  return (
    <section className="bg-lightGrayishWhite py-20">
      <div className="max-w-[1440px] mx-auto p-0">
        {/* Section for title and subtitle */}
        <div className="px-[10px] sm:px-5 md:px-10 xl:px-20">
          <Subtitle subTitle="Team" bgColor="bg-paleGreen" borderColor="border-paleGreen" />
          <Title title={<>Meet the incredible <span>team</span></>} maxWidth='max-w-[574px] lg:max-w-[768px]' />
          <Description text="We pride ourselves on being the best of the best, and our team encapsulates that." maxWidth="max-w-[536px]" />
        </div>

        {/* Swiper component for displaying team members */}
        <div ref={swiperWrapperRef} className="mt-10">
          <Swiper
            onSwiper={setSwiper} // This function will get called with the swiper instance
            loop={true} // Enable infinite loop
            speed={4500} // Set speed of transition between slides
            slidesPerView={'auto'} // Slides per view is auto to make it responsive
            autoplay={{
              delay: 0, // No delay to keep it responsive
              disableOnInteraction: false, // Keep autoplay active even when the user interacts
              reverseDirection: false, // Keep the default direction (left to right)
            }}
            modules={[Autoplay]} // Enable autoplay module for Swiper
            className="team-swiper w-full"
            breakpoints={{
              // Responsive breakpoints for different screen sizes
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {/* Loop through members and create a SwiperSlide for each one */}
            {(members?.length > 0 ? members.concat(members) : Array(6).fill({})).map((member, index) => (
              <SwiperSlide key={`${member?.name}-${index}`}>
                {/* Each slide represents a team member */}
                <div className="card p-2 rounded-lg border-2 border-whiteSmoke hover:shadow-lg transition-shadow duration-300">
                  {/* Display the team member's image */}
                  <img 
                    src={member?.img || "/default-image.jpg"} // Fallback to default image if not available
                    alt={member?.name || "Team member"} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Display the member's name, profession, and social links */}
                  <div className="profile-info mt-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{member?.name || "Unknown"}</h3>
                      <p className="text-davyGray mt-1">{member?.profession || "N/A"}</p>
                    </div>
                    <div className="links flex items-center gap-2">
                      {/* Display social links if available */}
                      {member?.links?.x && (
                        <Link
                          to={member.links.x}
                          className="text-white bg-limeGreen p-[5px] text-sm rounded-full hover:bg-darkLimeGreen transition-colors duration-300"
                        >
                          <RiTwitterXFill />
                        </Link>
                      )}
                      {member?.links?.linkedin && (
                        <Link
                          to={member.links.linkedin}
                          className="text-white bg-limeGreen p-[5px] text-sm rounded-full hover:bg-darkLimeGreen transition-colors duration-300"
                        >
                          <FaLinkedin />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
