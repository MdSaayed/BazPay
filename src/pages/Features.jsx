import React from 'react';
import   FeaturesSection from "../components/features/Features";
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import Team from '../components/team/Team';
import FaqV1 from '../components/faq/FaqV1';
import CtaV1 from '../components/cta/CtaV1';
import BlogV1 from '../components/blog/BlogV1';

const Features = () => {
    return (
        <>
            {/* Features */}
            <FeaturesSection />

            {/* Financial Overview */}
            <FinancialOverview />

            {/* Team Section*/}
            <Team />
            
            {/* Faq */}
            <FaqV1 />

            {/* CTA */}
            <CtaV1 />

            {/* Blog */}
            <BlogV1 />
        </>
    );
};

export default Features;
