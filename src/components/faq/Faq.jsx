import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Description from '../description/Description';
import Title from '../title/Title';

const Faq = () => {
    // FAQ data
    const faqs = [
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

    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState(0);

    // Toggle FAQ item
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section bg-lightGrayishWhite py-12">
            <div className="container mx-auto px-4"> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    <div>
                        <span className='text-[#6941C6] font-semibold text-base leading-normal block -mb-1'>Support</span>
                        <Title title="FAQs" textAlign='text-left' size='text-4xl' />
                        <Description text='Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.' textAlign='text-left' />
                    </div>
                        
                    {/* Faqs */}
                    <div className="faqs">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item p-3 md:p-6 mb-2 rounded-md ${index==openIndex ? "bg-softWhite" :'' }`}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className="text-lg font-medium text-primary leading-normal mr-2">{faq.question}</span>
                                    <motion.span
                                        className="flex items-center justify-center w-8 h-8 rounded-full"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }} // Rotate 180deg when open
                                        transition={{ duration: 0.3 }} // Smooth transition
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
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="text-[#535862] font-normal leading-normal text-base mt-2">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;