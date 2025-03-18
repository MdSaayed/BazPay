import React, { useState, useEffect, useRef } from 'react';
import Title from '../title/Title';
import PropTypes from 'prop-types';
import StatItem from './StatItem';
import Reveal from '../../animation/Reveal';

const Stats = ({ bgColor = "bg-transparent", textColor = "text-primary" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference for Intersection Observer

  // State for animated counters
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Target values for counters
  const targetCount1 = 10000;
  const targetCount2 = 1; // 1 Billion
  const targetCount3 = 99.9;

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.5 } // 50% visibility required to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters only when visible
  useEffect(() => {
    if (!isVisible) return; // Prevent animation before it's visible

    let frame;

    const animateCounters = () => {
      setCount1((prev) => (prev < targetCount1 ? prev + 100 : targetCount1));
      setCount2((prev) => (prev < targetCount2 ? prev + 0.05 : targetCount2)); // Smooth increment
      setCount3((prev) => (prev < targetCount3 ? prev + 0.8 : targetCount3));

      frame = requestAnimationFrame(animateCounters);
    };

    frame = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(frame);
  }, [isVisible]); // Runs only when `isVisible` becomes true

  return (
    <section ref={sectionRef} className="bg-lightGrayishWhite">
      <div className="container py-9">
        {/* Stats Container */}
        <div className={`${bgColor} ${bgColor !== 'bg-transparent' ? 'text-softWhite' : textColor} 
            grid grid-cols-1 lg:grid-cols-3 justify-between gap-y-12 lg:gap-20 
            py-9 px-8 rounded-3xl`}
          >
          
          {/* Section Title */}
            <Title 
              title={<>Backed by a bunch of well-known <span>finance services from</span> around the world.</>}
              maxWidth="md:max-w-[368px]" 
              size="text-2xl" 
              textAlign="text-center md:text-left" 
              color={textColor}
            /> 
          
              {/* Stats Counters */}
              <div className="col-span-2">
                <Reveal>
                  <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 lg:gap-10">
                    {/* Happy Customers */}
                    <StatItem value={count1} suffix="+" label="Happy Customers" textColor={textColor} />
                    {/* Secure Transactions */}
                    <StatItem value={`$${count2.toFixed(2)}`} suffix=" Billion+" label="Secure Transactions" textColor={textColor} />
                      {/* Smooth Uptime */}
                    <StatItem value={`${count3.toFixed(1)}`} suffix="%" label="Smooth Uptime" textColor={textColor} />
                  </div>
                </Reveal>
              </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Corrected PropTypes Validation for `Stats`
Stats.propTypes = {
  bgColor: PropTypes.string, // Background color class (Tailwind)
  textColor: PropTypes.string // Text color class (Tailwind)
};

export default Stats;
