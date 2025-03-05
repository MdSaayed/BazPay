import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Description from '../description/Description';
import Title from '../title/Title';

const FaqV1 = () => {
    // Ensure FaqV1 data is static and maintainable.
    const FaqV1s = [
            {
                question: 'Does Mazpay have a free trial?',
                answer: 'Absolutely! We provide a complimentary, personalized 30-minute onboarding call to help you get started smoothly.',
            },
            {
                question: 'How do I sign up for Mazpay?',
                answer: 'You can sign up for Mazpay by visiting our website and clicking on the "Sign Up" button. Follow the prompts to create your account.',
            },
            {
                question: 'What payment methods does Mazpay support?',
                answer: 'Mazpay supports a variety of payment methods, including credit/debit cards, bank transfers, and digital wallets.',
            },
            {
                question: 'Is Mazpay secure?',
                answer: 'Yes, Mazpay uses advanced encryption and security protocols to ensure your data and transactions are safe.',
            },
            {
                question: 'Can I use Mazpay internationally?',
                answer: 'Yes, Mazpay is available for use in multiple countries. Check our website for a list of supported regions.',
            },
            {
                question: 'How do I contact Mazpay support?',
                answer: 'You can contact Mazpay support through our website’s help center, or by emailing support@mazpay.com.',
            },
        ];

    //  Null instead of 0 to ensure no FaqV1 is open by default.
    const [openIndex, setOpenIndex] = useState(null);

    //  Functional updates to ensure correct state handling.
    const toggleFaqV1 = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="FaqV1-section bg-lightGrayishWhite py-12">
            <div className="container max-w-5xl mx-auto">
                {/*  semantic HTML and accessibility attributes */}
                <div className="FaqV1s">
                    {FaqV1s.map((FaqV1, index) => (
                        <div
                            key={index}
                            className={`FaqV1-item p-3 md:p-6 mb-2 rounded-md ${
                                openIndex === index ? 'bg-softWhite' : ''
                            }`}
                        >
                            <button
                                onClick={() => toggleFaqV1(index)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                                aria-expanded={openIndex === index} // Improves accessibility
                                aria-controls={`FaqV1-answer-${index}`}
                            >
                                <span className="text-lg font-medium text-primary leading-normal mr-2">
                                    {FaqV1.question}
                                </span>
                                <motion.span
                                    className="flex items-center justify-center w-8 h-8 rounded-full"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }} // Smooth rotation animation
                                    transition={{ duration: 0.3 }}
                                >
                                    {openIndex === index ? (
                                        <AiOutlineMinus className="border-2 border-[#A4A7AE] text-[#A4A7AE] rounded-full p-1 text-3xl font-semibold" />
                                    ) : (
                                        <AiOutlinePlus className="border-2 border-[#A4A7AE] text-[#A4A7AE] rounded-full p-1 text-3xl font-semibold" />
                                    )}
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`FaqV1-answer-${index}`} // Improves accessibility by linking with button
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="text-[#535862] font-normal leading-normal text-base mt-2">
                                            <p>{FaqV1.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqV1;

