import React from 'react';
import ErrorImg from '/assets/img/global/error-image.png';
import Button from '../components/ui/Button';

const Error = () => {
    return (
        <section>
            <div className="container">
                {/* Full-screen error page layout */}
                <div className="h-screen flex flex-col items-center justify-center">
                    
                    {/* Error Image */}
                    <div>
                        <img className='mx-auto md:max-w-[688px]' src={ErrorImg} alt="Error Page Img"/>
                    </div>

                    {/* Error Message and Navigation Button */}
                    <div className='flex flex-col gap-6 items-center mt-24'>
                        <h3 className='text-primary font-semibold text-5xl text-center'>Oops !</h3>
                        <p className="text-lg font-normal text-davyGray text-center">
                            Page not found, please try again or go back Home.
                        </p>

                        {/* Button to navigate back to the home page */}
                        <Button text='Go to home' link='/'/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Error;
