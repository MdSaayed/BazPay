import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Description from '../description/Description';
import Title from '../title/Title';
import Reveal from '../../animation/Reveal';
import { useLoading } from '../../context/LoadingContext';
import LoadingAnimation from '../loadingAnimation/LoadingAnimation';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Faq = () => {
    // State for FAQ data
    const [faqs, setFaqs] = useState([]);
    const { isLoading, startLoading, stopLoading } = useLoading();
    const [error, setError] = useState("");
    // Tracks the currently open FAQ (null means all are collapsed)
    const [openIndex, setOpenIndex] = useState(null);

        // Fetch FAQs from JSON file (Replace with actual API or data source)
        useEffect(() => {
            // Set Loading
            startLoading();
    
            // fetching data
            fetch('/faq.json')
                .then((res) => res.json())
                .then((data) => {
                    setFaqs(data)
                    stopLoading();
                })
                .catch((error) => {
                    setError(error.message);
                    stopLoading();
                    console.error('Failed to load FAQs:', error)
                });
        }, []);



    //  Functional updates to ensure correct state handling.
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Loading and error management 
    if (isLoading) return <LoadingAnimation />;
    if (error) return <ErrorMessage error={error} />; 

    return (
        <section className="faq-section bg-lightGrayishWhite py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    <div>
                        {/* Subtitle */}
                        <Reveal>
                            <span className="text-[#6941C6] font-semibold text-base leading-normal block -mb-1">
                                Support
                            </span>
                        </Reveal>

                        {/* Title */}
                        <Title title="FAQs" textAlign="text-left" size="text-4xl" />

                        {/* Description */}
                        <Description
                            text="Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat with our friendly team."
                            textAlign="text-left m-0"
                        />
                    </div>

                    {/*  semantic HTML and accessibility attributes */}
                    <Reveal>
                        <div className="faqs">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item p-3 md:p-6 mb-2 rounded-md ${
                                        openIndex === index ? 'bg-softWhite' : ''
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left focus:outline-none"
                                        aria-expanded={openIndex === index} // Improves accessibility
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="text-lg font-medium text-primary leading-normal mr-2">
                                            {faq.question}
                                        </span>
                                        <motion.span
                                            className="flex items-center justify-center w-8 h-8 rounded-full"
                                            animate={{ rotate: openIndex === index ? 180 : 0 }} // Smooth rotation animation
                                            transition={{ duration: 0.3 }}
                                        >
                                            {openIndex === index ? (
                                                <AiOutlineMinus className="border-2 border-coolGray text-coolGray rounded-full p-1 text-3xl font-semibold" />
                                            ) : (
                                                <AiOutlinePlus className="border-2 border-coolGray text-coolGray rounded-full p-1 text-3xl font-semibold" />
                                            )}
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                id={`faq-answer-${index}`} // Improves accessibility by linking with button
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="text-davyGray font-normal leading-normal text-base mt-2">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Faq;
