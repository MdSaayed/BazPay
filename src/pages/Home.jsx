
import React from 'react';
import appleIcon from '../assets/icons/apple.svg';
import googleIcon from '../assets/icons/google.svg';
import heroImg from '../assets/img/hero/hero-dashboard.png';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/brandLogo/BrandLogo';



const Home = () => {
    return (
        <>
            <section className='hero-home'>
                <div className='container py-24'>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20	items-center">
                        <div class="col-1">
                            <h1 className="text-6xl font-semibold leading-normal text-primary text-center sm:text-left">Simplify your money game with 
                                <span className='text-limeGreen'> BazPay!</span>
                            </h1>
                        </div>
                        <div className="col-2">
                            <p className='mb-6 text-lg leading-7 text-center sm:text-left'>Check out our all-in-one solution for easy transactions, quick money transfers, and total financial control!</p>
                            <div className="flex gap-6 flex-col sm:flex-row">
                                <Link className='flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGreen whitespace-nowrap hover:bg-lightGray border hover:border-lightSilver'>
                                    <img src={appleIcon} alt=""/>
                                    <span>Download for iOS</span>
                                </Link>
                                <Link className='flex items-center justify-center gap-2 px-4 py-2 rounded-[32px] bg-lightGray border border-lightSilver whitespace-nowrap hover:bg-lightGreen hover:border-lightGreen'>
                                    <img src={googleIcon} alt=""/>
                                    <span>Download for Android</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="img-wrapper mt-20">
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </section>
           
           {/* brands logo slider */}
            <BrandLogo title="Working for innovative companies." desc="Discover tailored financial solutions that secure your investments." />
          
        </>
    );
};

export default Home;