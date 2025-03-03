import React from 'react';
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

const Team = () => {
  const members = [
    {
      name: 'Zaid Schwartz',
      img: '/assets/img/team/team-1.png',
      profession: 'CEO & Founder',
      links: {
        linkedin: 'https://www.linkedin.com/in/zaidschwartz',
        x: 'https://twitter.com/zaidschwartz',
      },
    },
    {
      name: 'Sophia Carter',
      img: '/assets/img/team/team-2.png',
      profession: 'Lead Designer',
      links: {
        linkedin: 'https://www.linkedin.com/in/sophiacarter',
        x: 'https://twitter.com/sophiacarter',
      },
    },
    {
      name: 'Liam Johnson',
      img: '/assets/img/team/team-3.png',
      profession: 'Senior Developer',
      links: {
        linkedin: 'https://www.linkedin.com/in/liamjohnson',
        x: 'https://twitter.com/liamjohnson',
      },
    },
    {
      name: 'Emma Williams',
      img: '/assets/img/team/team-4.png',
      profession: 'Marketing Manager',
      links: {
        linkedin: 'https://www.linkedin.com/in/emmawilliams',
        x: 'https://twitter.com/emmawilliams',
      },
    },
  ];

  return (
    <section className="bg-lightGrayishWhite py-20">
      <div className="container mx-auto p-0">
        <div className="px-[10px] sm:px-5 md:px-10 xl:px-20">
          <Subtitle subTitle="Team" bgColor="bg-[#ECFFCD]" borderColor="border-[#ECFFCD]" />
          <Title title={<>Meet the incredible <span>team</span></>} />
          <Description text="We pride ourselves of being the best of the best and our team encapsulates that." maxWidth="max-w-[536px]" />
        </div>

        {/* Team Member Slider */}
        <div className="mt-10">
          <Swiper
            loop={true} // Enables infinite loop
            speed={3000} // Defines transition speed
            autoplay={{
              delay: 0, // Removes autoplay delay for seamless scrolling
              disableOnInteraction: false,
              reverseDirection: false, // Scrolls left-to-right
            }}
            modules={[Autoplay]}
            className="team-swiper w-full"
            breakpoints={{
              320: { // Mobile (small screens)
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: { // Tablets
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { // Desktop
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {/* Duplicate members array for seamless infinite loop effect */}
            {members.concat(members).map((member, index) => (
              <SwiperSlide key={`${member.name}-${index}`}>
                <div className="card p-2 rounded-lg border-2 border-[#F5F5F5]">
                  <img src={member.img} alt={`Member ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  <div className="profile-info mt-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                      <p className="text-davyGray  mt-1">{member.profession}</p>
                    </div>
                    <div className="links flex items-center gap-2">
                      {member.links.x && (
                        <Link to={member.links.x} className="text-white bg-limeGreen p-[5px] text-sm rounded-full hover:underline">
                          <RiTwitterXFill/>
                        </Link>
                      )}
                      {member.links.linkedin && (
                        <Link to={member.links.linkedin} className="text-white bg-limeGreen p-[5px] text-sm rounded-full hover:underline mr-2">
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