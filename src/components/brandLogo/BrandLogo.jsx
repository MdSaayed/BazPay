import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import "./brandLogo.css";
import { Autoplay } from 'swiper/modules';

const BrandLogo = ({ title, desc }) => {
    // Define an array of brand logo image paths
    const logos = [
        '/assets/img/brands/logo-1.png',
        '/assets/img/brands/logo-2.png',
        '/assets/img/brands/logo-3.png',
        '/assets/img/brands/logo-4.png',
        '/assets/img/brands/logo-5.png',
    ];

    return (
        <section className='brands py-12 bg-lightGrayishWhite'>
            <div className="container">
                <div className="brand-area border border-[#E9EAEB] rounded-md py-6 px-10">

                    {/* Render title if provided */}
                    {title && <h2 className='title text-center mb-8 text-2xl'>{title}</h2>}

                    <Swiper
                        loop={true} // Enables infinite loop
                        speed={3000} // Defines transition speed
                        autoplay={{
                            delay: 0, // Removes autoplay delay for seamless scrolling
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="ub-brands__slider-area"
                        
                        // 🔥 Responsive settings
                        breakpoints={{
                            320: {  // Mobile (small screens)
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {  // Tablets
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1024: { // Desktop
                                slidesPerView: 5,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {/* Duplicate logos array for seamless infinite loop effect */}
                        {logos.concat(logos).map((logo, index) => ( 
                            <SwiperSlide key={index}>
                                <img src={logo} alt={`Logo ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Render description if provided */}
                    {desc && <p className='text-center font-normal text-base mt-8'>{desc}</p>}
                </div>
            </div>
        </section>
    );
};

// Props Validation
BrandLogo.propTypes = {
    title: PropTypes.string, // Title should be a string
    desc: PropTypes.string,  // Description should be a string
};

// Default Props
BrandLogo.defaultProps = {
    title: '', // Default title is an empty string
    desc: '',  // Default description is an empty string
};

export default BrandLogo;
