import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowOutward, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  const [isAllPagesOpen, setAllPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAllPagesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!dropdownRef.current.contains(document.querySelector(":hover"))) {
        setAllPagesOpen(false);
      }
    }, 200);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-lightGrayishWhite">
      <div className="container py-0">
        <div className="flex items-center justify-between h-20 z-40">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img className="max-w-[134px]" src="/logo.png" alt="Logo" />
            </NavLink>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <CustomNavLink to='/'>Home</CustomNavLink>           
            <CustomNavLink to='/features'>Features</CustomNavLink>           
            <CustomNavLink to='/about'>About</CustomNavLink>           
            <CustomNavLink to='/blog'>Blog</CustomNavLink>           

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-item px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1">
                All Pages
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-4 h-4 transform transition-transform ${isAllPagesOpen ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isAllPagesOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-56 z-30 bg-white text-primary rounded-lg shadow-lg border"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-1 h-full">
                    <li><CustomNavLink to='/'>Home V1</CustomNavLink></li>
                    <li><CustomNavLink to='/homev2'>Home V2</CustomNavLink></li>
                    <li><CustomNavLink to='/features'>Features</CustomNavLink></li>
                    <li><CustomNavLink to='/about'>About</CustomNavLink></li>
                    <li><CustomNavLink to='/contact'>Contact</CustomNavLink></li>
                    <li><CustomNavLink to='/blog'>Blog</CustomNavLink></li>
                    <li><CustomNavLink to='/blog/3'>Blog Details</CustomNavLink></li>
                    <li><CustomNavLink to='/pricing'>Pricing</CustomNavLink></li>
                    <li><CustomNavLink to='/pricing/1'>Pricing Details</CustomNavLink></li>
                    <li><CustomNavLink to='/licenses'>Licenses</CustomNavLink></li>
                    <li><CustomNavLink to='/privacypolicy'>Privacy & Policy</CustomNavLink></li>
                    <li><CustomNavLink to='/terms'>Terms</CustomNavLink></li>
                    <li><CustomNavLink to='/error'>Error</CustomNavLink></li>
                  </ul>
                </motion.div>
              )}
            </div>

            <CustomNavLink to='/contact'>Contact</CustomNavLink>
          </nav>

          <div className="btn-wrapper hidden lg:block">
            <NavLink to="/pricing" className="btn-primary">
              <span>Get Started</span>
              <MdOutlineArrowOutward className="btn-arrow" />
            </NavLink>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-primary">
              {isMobileMenuOpen ? <MdClose className="w-6 h-6" /> : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div className="lg:hidden fixed inset-0 top-16 z-30 bg-white" initial={{ opacity: 0, top: "-100%" }} animate={{ opacity: 1, top: 80 }} exit={{ opacity: 0, top: "-100%" }} transition={{ duration: 0.3 }}>
            <div className="container py-4 h-full overflow-y-auto">
              <nav className="flex flex-col space-y-2">
                <CustomNavLink to='/' mobileMenu={true} setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}>Home</CustomNavLink>
                <CustomNavLink to='/features' mobileMenu={true} setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}>Features</CustomNavLink>
                <CustomNavLink to='/about' mobileMenu={true} setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}>About</CustomNavLink>
                <CustomNavLink to='/blog' mobileMenu={true} setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}>Blog</CustomNavLink>
                {/* Features Dropdown in Mobile */}
                <button
                  onClick={() => setAllPagesOpen(!isAllPagesOpen)}
                  className="text-primary font-medium py-2 flex justify-between items-center"
                >
                  All Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 transform transition-transform ${
                      isAllPagesOpen ? "rotate-180" : ""
                    }`} // Rotate arrow when open
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  
                </button>
                {isAllPagesOpen && (
                      <div className="bg-softWhite rounded-lg p-3">
                        <ul className="space-y-2">
                          {[
                            { path: '/', label: 'Home V1' },
                            { path: '/homev2', label: 'Home V2' },
                            { path: '/features', label: 'Features' },
                            { path: '/about', label: 'About' },
                            { path: '/contact', label: 'Contact' },
                            { path: '/blog', label: 'Blog' },
                            { path: '/blog/4', label: 'Blog Details' },
                            { path: '/pricing', label: 'Pricing' },
                            { path: '/pricing/1', label: 'Pricing Details' },
                            { path: '/licenses', label: 'Licenses' },
                            { path: '/privacypolicy', label: 'Privacy & Policy' },
                            { path: '/terms', label: 'Terms' },
                            { path: '/error', label: 'Error' },
                          ].map(({ path, label }) => (
                            <li key={path} className="mb-2">
                              <CustomNavLink to={path} mobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen}>
                                {label}
                              </CustomNavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                <CustomNavLink to='/contact' mobileMenu={true} setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}>Contact</CustomNavLink>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
