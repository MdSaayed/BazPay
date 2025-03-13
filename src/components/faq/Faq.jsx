import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Description from '../description/Description';
import Title from '../title/Title';
import Reveal from '../../animation/Reveal';

const Faq = () => {
    // Ensure FAQ data is static and maintainable.
    const faqs = [
            {
                question: 'Does BazPay have a free trial?',
                answer: 'Absolutely! We provide a complimentary, personalized 30-minute onboarding call to help you get started smoothly.',
            },
            {
                question: 'How do I sign up for BazPay?',
                answer: 'You can sign up for BazPay by visiting our website and clicking on the "Sign Up" button. Follow the prompts to create your account.',
            },
            {
                question: 'What payment methods does BazPay support?',
                answer: 'BazPay supports a variety of payment methods, including credit/debit cards, bank transfers, and digital wallets.',
            },
            {
                question: 'Is BazPay secure?',
                answer: 'Yes, BazPay uses advanced encryption and security protocols to ensure your data and transactions are safe.',
            },
            {
                question: 'Can I use BazPay internationally?',
                answer: 'Yes, BazPay is available for use in multiple countries. Check our website for a list of supported regions.',
            },
            {
                question: 'How do I contact BazPay support?',
                answer: 'You can contact BazPay support through our website’s help center, or by emailing support@BazPay.com.',
            },
        ];

    //  Null instead of 0 to ensure no FAQ is open by default.
    const [openIndex, setOpenIndex] = useState(null);

    //  Functional updates to ensure correct state handling.
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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
