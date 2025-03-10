import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop ';
import NewNav from '../components/navbar/NewNav';

const Layout = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <NewNav/>
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;