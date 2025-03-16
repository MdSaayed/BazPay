import React from 'react';
import   FeaturesSection from "../components/features/Features";
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import Team from '../components/team/Team';
import FaqV2 from '../components/faq/FaqV2';
import CtaV1 from '../components/cta/CtaV2';
import BlogV1 from '../components/blog/BlogV1';

const Features = () => {
    return (
        <>
            {/* Features */}
            <FeaturesSection />

            {/* Financial Overview */}
            <FinancialOverview cardBg='bg-white' />

            {/* Team Section*/}
            <Team />
            
            {/* Faq */}
            <FaqV2 />

            {/* CTA */}
            <CtaV1 />

            {/* Blog */}
            <BlogV1 />
        </>
    );
};

export default Features;
