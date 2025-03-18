import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowOutward, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import CustomNavLink from "./CustomNavLink";

// Nav Menu Items
const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

// Dropdown
const dropdownItems = [
  { path: '/', label: 'Home' },
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
  { path: '/error', label: 'Error' }
];

const Navbar = () => {
  const [isAllPagesOpen, setAllPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle Scroll Event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Add shadow when scrolled
    } else {
      setIsScrolled(false); // Remove shadow when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Show Dropdown
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

  // Overflow Hidden When Open Mobile Menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`bg-lightGrayishWhite sticky top-0 z-50 ${isScrolled ? "shadow-sm lg:opacity-90" : "shadow-none"}`}>
      <div className="container py-0">
        <div className="flex items-center justify-between h-20 z-40">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img className="max-w-[134px]" src="/logo.png" alt="Logo" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map(({ path, label }) => (
              <CustomNavLink key={path} to={path}>{label}</CustomNavLink>
            ))}
            <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="nav-item px-3 py-2 text-sm font-medium flex items-center gap-1">
                All Pages
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-4 h-4 transform transition-transform ${isAllPagesOpen ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isAllPagesOpen && (
                <motion.div className="absolute top-full left-0 mt-2 w-56 z-30 bg-white text-primary rounded-lg shadow-lg border" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                  <ul>
                    {dropdownItems.map(({ path, label }) => (
                      <li key={path}><CustomNavLink to={path}>{label}</CustomNavLink></li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Button */}
          <div className="btn-wrapper hidden lg:block">
            <NavLink to="/pricing" className="btn-primary">
              <span>Get Started</span>
              <MdOutlineArrowOutward className="btn-arrow" />
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
              {isMobileMenuOpen ? <MdClose className="w-6 h-6" /> : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div className="lg:hidden fixed inset-0 top-16 z-30 bg-white" initial={{ opacity: 0, top: "-100%" }} animate={{ opacity: 1, top: 80 }} exit={{ opacity: 0, top: "-100%" }} transition={{ duration: 0.3 }}>
              <div className="container py-4 h-full overflow-y-auto">
                <nav className="flex flex-col space-y-3 text-lg">
                  {menuItems.map(({ path, label }) => (
                    <CustomNavLink key={path} to={path} mobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen}>{label}</CustomNavLink>
                  ))}
                  <button onClick={() => setAllPagesOpen(!isAllPagesOpen)} className="text-primary font-medium flex justify-between items-center">
                    All Pages
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-4 h-4 transform transition-transform ${isAllPagesOpen ? "rotate-180" : ""}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {isAllPagesOpen && (
                    <div className="bg-softWhite rounded-lg p-3">
                      <ul className="space-y-3 text-base">
                        {dropdownItems.map(({ path, label }) => (
                          <li key={path}><CustomNavLink to={path} mobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen}>{label}</CustomNavLink></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
