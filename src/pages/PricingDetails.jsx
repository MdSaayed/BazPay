import { Link } from 'react-router-dom';
import { useState } from 'react';
import Title from './../components/title/Title';
import CtaV1 from './../components/cta/CtaV1';
import Button from './../components/ui/Button';

const PricingDetails = () => {
  const [selectedDuration, setSelectedDuration] = useState('monthly');

  return (
        <>
            {/* Pricing Details Area */}
            <section className="bg-lightGrayishWhite">
                <div className="container py-24">
                    {/* Inclusive Plans Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                        <div className="md:col-span-2">
                            {/* Heading And List */}
                            <div>
                                <Title title={'Business Plan'} textAlign='text-left' />
                                <div className='mt-8'>
                                    <ul className="space-y-4 list-none">
                                        <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                        Data-driven insights
                                        </li>
                                        <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                        Receive payments
                                        </li>
                                        <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                        E-commerce optimisation
                                        </li>
                                        <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                        AI generated content
                                        </li>
                                        <li className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                        Email support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className='mt-20'>
                                <h3 className='text-davyGray text-3xl font-semibold mb-4'>Inclusive plans</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p className='text-base font-normal text-davyGray'>
                                        Morbid and imperdiet in ipsum, adipiscing elit dui lectus. Tellus id acelerisque est ultricies ultricies.
                                        Duis est sit sed leo nisi, blandit elit sagittis. Calaque ninique consequat quem ead. Nisi at costerisque
                                        amet nulla purus habitasse.
                                    </p>
                                    <p className='text-base font-normal text-davyGray'>
                                        Nunc sed feuscitus laboratum feugiat sed intendum. Ipsum egestas condimentum mi massa. In tincidunt pharetra
                                        consectetur sed duis facilisis metus: Ellem egestas in nec sed et. Quis lobortis sit sit dictum eget nibh
                                        tortor commodo cursus.
                                    </p>
                                    <p className='text-base font-normal text-davyGray'>
                                        Odio fulis sagittis, morbi feugiat tortor vitae feugiat fusca aliquet. Nam elementum uma nisi aliquet erat
                                        dolor anim. Canao id morbi eget ipsum. Aliquam semectus neque ix id eget consequatur dictum. Donec posuere
                                        pharetra odio consequat sedefaliqua et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
                                        gravida enim posuere cursus diam.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Card */}
                        <div className='order-first xl:order-last'>
                            <div className="bg-white rounded-lg card-shadow px-10 py-12 border border-gray-100">
                                <span className='text-lg text-primary font-normal'>Get Your Plan Today</span>
                                <h3 className="text-4xl text-primary font-semibold my-4">$ 109.00 USD</h3>
                                
                                <div>
                                    <p className='font-bold text-lg text-primary'>Monthly</p>
                                    <p className='text-base font-normal text-davyGray mt-3'>or $ 490.00 USD yearly</p>
                                </div>

                                <div className="space-y-4 my-6">
                                    <select className="w-full px-0 py-3 border-b bg-transparent border-gray-300 text-davyGray text-lg font-medium focus:outline-none">
                                        <option>Select Plan Duration</option>
                                        <option>Monthly</option>
                                        <option>Yearly</option>
                                    </select>
                                </div>


                                <Button text='Add to Cart' fullWidth={true} link="/checkout" />
                            </div>
                        </div>
                </div>
                </div>
            </section>

            {/* CTA */}
            <CtaV1 />
        </>
  );
};

export default PricingDetails;
