import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import LoadingAnimation from '../loadingAnimation/LoadingAnimation';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Reveal from '../../animation/Reveal';
import { useLoading } from '../../context/LoadingContext';


const FaqV2 = () => {
    // State for FAQ data
    const [faqs, setFaqs] = useState([]);
    const { isLoading, startLoading, stopLoading } = useLoading();
    const [error, setError] = useState("");
    // Tracks the currently open FAQ (null means all are collapsed)
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle FAQ open/close
    const toggleFaqV2 = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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

    // Loading and error management 
    if (isLoading) return <LoadingAnimation />;
    if (error) return <ErrorMessage error={error} />; 

    return (
        <section className="FaqV2-section bg-lightGrayishWhite py-12">
            <div className="container max-w-5xl mx-auto">
                {/* FAQ Wrapper */}
                <Reveal>
                    <div className="FaqV2s">
                        {faqs?.map((faq, index) => (
                            <div
                                key={index}
                                className={`FaqV2-item p-3 md:p-6 mb-2 rounded-md ${
                                    openIndex === index ? 'bg-softWhite' : ''
                                }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFaqV2(index)}
                                    className="w-full flex justify-between items-center text-left focus:outline-none"
                                    aria-expanded={openIndex === index} // Accessibility
                                    aria-controls={`FaqV2-answer-${index}`}
                                    role="button"
                                >
                                    <span className="text-lg font-medium text-primary leading-normal mr-2">
                                        {faq?.question}
                                    </span>
                                    {/* Animated Toggle Icon */}
                                    <motion.span
                                        className="flex items-center justify-center w-8 h-8 rounded-full"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {openIndex === index ? (
                                            <AiOutlineMinus className="border-2 border-coolGray text-coolGray rounded-full p-1 text-3xl font-semibold" />
                                        ) : (
                                            <AiOutlinePlus className="border-2 border-coolGray text-coolGray rounded-full p-1 text-3xl font-semibold" />
                                        )}
                                    </motion.span>
                                </button>

                                {/* Animated Answer Section */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            id={`FaqV2-answer-${index}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="text-davyGray font-normal leading-normal text-base mt-2">
                                                <p>{faq?.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FaqV2;
