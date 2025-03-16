import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop ';

const Layout = () => {
    return (
        <>
            {/* Scrolls the page to the top when the route changes */}
            <ScrollToTop />

            {/* Navigation bar component */}
            <Navbar />

            {/* Renders the current route's component based on the URL */}
            <Outlet />

            {/* Footer component */}
            <Footer />
        </>
    );
};

export default Layout;
