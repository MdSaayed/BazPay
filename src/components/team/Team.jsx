import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';
import { Link } from 'react-router-dom'; // Corrected import

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
              <SwiperSlide key={index}>
                <div className="card bg-white p-4 rounded-lg shadow-md">
                  <img src={member.img} alt={`Member ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  <div className="profile-info mt-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.profession}</p>
                    <div className="links mt-2">
                      {member.links.linkedin && (
                        <Link to={member.links.linkedin} className="text-blue-500 hover:underline mr-2">
                          LinkedIn
                        </Link>
                      )}
                      {member.links.x && (
                        <Link to={member.links.x} className="text-blue-500 hover:underline">
                          X
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