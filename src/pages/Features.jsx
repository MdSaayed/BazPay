import React from 'react';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import Team from '../components/team/Team';
import Blog from '../components/blog/Blog';
import FeaturesSection from '../components/featuresSection/FeaturesSection';
import Faq from '../components/faq/Faq';
import Cta from '../components/cta/Cta';

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
            <Faq />

            {/* CTA */}
            <Cta />

            {/* Blog */}
            <Blog />
        </>
    );
};

export default Features;
