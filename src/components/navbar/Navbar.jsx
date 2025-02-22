import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md";
import "./navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Utility function to combine class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
   <header>
     <div className='container'>
      <nav className="nav">
          <div className="desktop-menu flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center space-x-2">
                <img className="max-w-[134px]" src="/Logo.png" alt="Logo" />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <ul className="desktop-menu hidden lg:flex items-center">
              <NavLink to="/" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Home</NavLink>
              <NavLink to="/features" className="first-line:nav-item px-3 py-2 text-sm font-medium transition-colors">Features</NavLink>
              <NavLink to="/about" className="nav-item px-3 py-2 text-sm font-medium transition-colors">About</NavLink>
              <NavLink to="/blog" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Blog</NavLink>
              <NavLink to="/contact" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Contact</NavLink>
              <NavLink to="/cart" className="nav-item px-3 py-2 text-sm font-medium transition-colors flex items-center">Cart
              <span className="ml-1">(0)</span></NavLink>
            </ul>

            {/* nav button */}
            <div className='btn-wrapper hidden lg:block'>
              <NavLink  to="/get-started" className="btn-primary"> <span>Get Started</span> <MdOutlineArrowOutward className='btn-arrow' /></NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <NavLink to="/" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">Home</NavLink>
            <NavLink to="/features" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">Features</NavLink>
            <NavLink to="/about" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">About</NavLink>
            <NavLink to="/blog" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">Blog</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">Contact</NavLink>
            <NavLink to="/cart" className="block px-3 py-2 text-base font-medium  hover:bg-gray-50 rounded-md transition-colors">Cart (0)</NavLink>
            <NavLink to="/get-started" className="block w-full text-center rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" > Get Started → </NavLink>
          </div>
        </div>
      </nav>
     </div>
   </header>
  );
};

export default Navbar;
