import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowOutward, MdClose } from "react-icons/md"; // Import close icon
import { motion } from "framer-motion";

const NewNav = () => {
  const [isAllPagesOpen, setAllPagesOpen] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const dropdownRef = useRef(null);
const timeoutRef = useRef(null);

// Handles hover interaction for the dropdown
const handleMouseEnter = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current); // Prevent hiding if user hovers back quickly
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
  

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-lightGrayishWhite">
      <div className="container py-0">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img className="max-w-[134px]" src="/Logo.png" alt="Logo" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
              Home
            </Link>
            <Link to="/features" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
              Features
            </Link>
            <Link to="/about" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
              About
            </Link>
            <Link to="/blog" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
              Blog
            </Link>

            {/* Features Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="nav-item px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                All Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transform transition-transform ${
                    isAllPagesOpen ? "rotate-180" : ""
                  }`} // Rotate when open
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown with Animation */}
              {isAllPagesOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-56 bg-white text-primary rounded-lg shadow-lg border"
                  initial={{ opacity: 0, y: -20 }} // Initial position and opacity
                  animate={{ opacity: 1, y: 0 }} // Animate to visible
                  exit={{ opacity: 0, y: -20 }} // Exit animation
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-1">
                    <li>
                      <Link to="/" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/homev1" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Home V1
                      </Link>
                    </li>
                    <li>
                      <Link to="/features" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        About
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <Link to="/contact" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
              Contact
            </Link>
          </nav>

          {/* nav button */}
          <div className="btn-wrapper hidden lg:block">
            <NavLink to="/get-started" className="btn-primary">
              <span>Get Started</span>
              <MdOutlineArrowOutward className="btn-arrow" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-primary">
              {isMobileMenuOpen ? (
                <MdClose className="w-6 h-6" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Height Animation */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 top-16 z-40 bg-white"
          initial={{ opacity: 0, top: "-100%" }} // Initial state (off-screen)
          animate={{ opacity: 1, top: 80 }} // Animate to top-0 (visible)
          exit={{ opacity: 0, top: "-100%" }} // Exit animation (move off-screen)
          transition={{ duration: 0.3 }}
        >
          <div className="container px-4 sm:px-6 py-4 h-full overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary font-medium py-2">
                Home
              </Link>
              <Link to="/features" className="text-primary font-medium py-2">
                Features
              </Link>
              <Link to="/about" className="text-primary font-medium py-2">
                About
              </Link>
              <Link to="/blog" className="text-primary font-medium py-2">
                Blog
              </Link>

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
                  <ul className="space-y-1">
                    <li>
                      <Link to="/" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/homev1" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Home V1
                      </Link>
                    </li>
                    <li>
                      <Link to="/features" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-item px-3 py-2 text-sm font-medium transition-colors block">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <Link to="/contact" className="text-primary font-medium py-2">
                Contact
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NewNav;
