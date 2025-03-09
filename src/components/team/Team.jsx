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

const Team = () => {
  // State to store team members data
  const [members, setMembers] = useState([]);
  // Loading state to track if data is being fetched
  const [loading, setLoading] = useState(true);
  // Error state to store any error messages
  const [error, setError] = useState("");
  // State to store Swiper instance
  const [swiper, setSwiper] = useState(null);
  // Ref to store Swiper wrapper for handling hover events
  const swiperWrapperRef = useRef(null);

  // Fetch team data from JSON file when the component mounts
  useEffect(() => {
    fetch("/team.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team members");
        return res.json();
      })
      .then((data) => {
        setMembers(data || []); // Ensure data is an array to avoid errors
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Store error message
        setLoading(false);
      });
  }, []);

  // Effect to control Swiper autoplay behavior on hover
  useEffect(() => {
    const wrapper = swiperWrapperRef.current;
    
    if (!swiper || !wrapper) return;

    // Function to stop autoplay when mouse enters the swiper
    const stopAutoplay = () => {
      if (swiper) {
        const swiperTranslate = swiper.getTranslate(); // Get current translate position
        swiper.setTranslate(swiperTranslate); // Set the same position to freeze slides
        swiper?.autoplay?.stop(); // Stop autoplay (optional chaining used)
      }
    };

    // Function to start autoplay when mouse leaves the swiper
    const startAutoplay = () => {
      if (swiper) {
        swiper.slideTo(swiper.activeIndex, 3000, false); // Resume from the last active slide
        swiper?.autoplay?.start(); // Start autoplay again (optional chaining used)
      }
    };
    
    startAutoplay(); // Ensure autoplay starts initially

    // Add event listeners for hover effects
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", startAutoplay);

    // Cleanup event listeners when component unmounts
    return () => {
      wrapper.removeEventListener("mouseenter", stopAutoplay);
      wrapper.removeEventListener("mouseleave", startAutoplay);
    };
  }, [loading]); // Runs only when `loading` state changes

  // Loading animation and error message
  if (loading) return <LoadingAnimation />;
  if (error) return <ErrorMessage />;

  return (
    <section className="bg-lightGrayishWhite py-20">
      <div className="wrapper mx-auto p-0">
        <div className="px-[10px] sm:px-5 md:px-10 xl:px-20">
          {/* Section heading */}
          <Subtitle subTitle="Team" bgColor="bg-paleGreen" borderColor="border-paleGreen" />
          <Title title={<>Meet the incredible <span>team</span></>} />
          <Description text="We pride ourselves of being the best of the best and our team encapsulates that." maxWidth="max-w-[536px]" />
        </div>

        {/* Swiper Slider wrapper */}
        <div ref={swiperWrapperRef} className="mt-10">
          <Swiper
            onSwiper={setSwiper} // Store Swiper instance in state
            loop={true} // Enable infinite looping
            speed={3000} // Set transition speed
            slidesPerView={'auto'} // Automatically adjust slides per view
            autoplay={{
              delay: 0, // No delay between slides
              disableOnInteraction: false, // Keep autoplay enabled even when user interacts
              reverseDirection: false, // Normal slide direction
            }}
            modules={[Autoplay]}
            className="team-swiper w-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 }, // Mobile view
              768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet view
              1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop view
            }}
          >
            {/* Duplicating members array to create an infinite loop effect */}
            {members.concat(members).map((member, index) => (
              <SwiperSlide key={`${member?.name}-${index}`}>
                <div className="card p-2 rounded-lg border-2 border-whiteSmoke hover:shadow-lg transition-shadow duration-300">
                  {/* Team member image */}
                  <img 
                    src={member?.img || "/default-image.jpg"} // Provide a fallback image
                    alt={member?.name || "Team member"} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {/* Profile info */}
                  <div className="profile-info mt-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{member?.name || "Unknown"}</h3>
                      <p className="text-davyGray mt-1">{member?.profession || "N/A"}</p>
                    </div>
                    {/* Social media links */}
                    <div className="links flex items-center gap-2">
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
