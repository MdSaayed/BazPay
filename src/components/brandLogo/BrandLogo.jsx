import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import "./brandLogo.css";
import { Autoplay } from 'swiper/modules';

const BrandLogo = ({title,desc}) => {

    const logos = [
        '/assets/img/brands/logo-1.png',
        '/assets/img/brands/logo-2.png',
        '/assets/img/brands/logo-3.png',
        '/assets/img/brands/logo-4.png',
        '/assets/img/brands/logo-5.png',
    ];

    return (
        <section className='brands py-12'>
            <div className="container">
                <div class="brand-area border border-[#E9EAEB] rounded-md py-6 px-10">
                    {title ? <h2 className='text-center  mb-8 text-2xl'>{title}</h2> : ""}

                    <Swiper
                        loop={true}
                        speed={3000} 
                        autoplay={{
                            delay: 0,  
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
                        {logos.concat(logos).map((logo, index) => ( 
                            <SwiperSlide key={index}>
                                <img src={logo} alt={`Logo ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {desc ? <p className='text-center mt-8'>{desc}</p> : ""}
                </div>
            </div>
        </section>
    );
};

export default BrandLogo;
