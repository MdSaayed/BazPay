import React, { useState, useEffect } from 'react';
import Title from '../title/Title';
import PropTypes from 'prop-types';

const Stats = ({bgColor="bg-transparent",textColor="text-primary"}) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const targetCount1 = 10000;
  const targetCount2 = 1; // 1 Billion
  const targetCount3 = 99.9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prev) => (prev < targetCount1 ? prev + 100 : targetCount1));
      setCount2((prev) => (prev < targetCount2 ? prev + 1 : targetCount2));
      setCount3((prev) => (prev < targetCount3 ? prev + 1 : targetCount3));
    }, 10);

    return () => clearInterval(interval);
  }, [targetCount1, targetCount2, targetCount3]);

  return (
    <section className='bg-lightGrayishWhite'>
        <div className='container py-9'>
            <div className={`${bgColor} ${bgColor? 'text-softWhite' : 'text-primary' } grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-12 lg:gap-20 py-9 px-8 rounded-3xl`}>
                <Title title={<>Backed by a bunch of well-known <span>finance services from</span> around the world.</>} maxWidth='md:max-w-[368px]' size='text-2xl' textAlign='text-center md:text-left' color={textColor}/> 
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 col-span-2">
                    <div className="text-center md:text-left">
                        <h3 className={`${textColor} text-5xl font-semibold`}>{count1.toLocaleString()}+</h3>
                        <p className={`${textColor} opacity-90 mt-4`}>Happy Customers</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className={`${textColor} text-5xl font-semibold`}>${count2.toLocaleString()} Billion+</h3>
                        <p className={`${textColor} opacity-90 mt-4`}>Secure Transactions</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className={`${textColor} text-5xl font-semibold`}>{count3.toFixed(1)}%</h3>
                        <p className={`${textColor} opacity-90 mt-4`}>Smooth Uptime</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// PropTypes Validation
Stats.propTypes = {
  bgColor: PropTypes.string
};


export default Stats;