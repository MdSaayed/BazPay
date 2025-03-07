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
    <header className='bg-lightGrayishWhite'>
      <div className='container relative'>
        <nav className="nav">
          <div className="desktop-menu flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center space-x-2">
                <img className="max-w-[134px]" src="/Logo.png" alt="Logo" />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <ul className="menu hidden lg:flex items-center">
              <NavLink to="/" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Home</NavLink>
              <NavLink to="/features" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Features</NavLink>
              <NavLink to="/about" className="nav-item px-3 py-2 text-sm font-medium transition-colors">About</NavLink>
              <NavLink to="/blog" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Blog</NavLink>
              <NavLink to="/contact" className="nav-item px-3 py-2 text-sm font-medium transition-colors">Contact</NavLink>
              <NavLink to="/cart" className="nav-item px-3 py-2 text-sm font-medium transition-colors flex items-center">Cart
                <span className="ml-1">(0)</span>
              </NavLink>
            </ul>

            {/* nav button */}
            <div className='btn-wrapper hidden lg:block'>
              <NavLink to="/get-started" className="btn-primary"> 
                <span>Get Started</span> 
                <MdOutlineArrowOutward className='btn-arrow' />
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md border-none bg-transparent" >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn( "mobile-menu absolute top-[70px] left-0 w-full px-[10px] sm:px-5 md:px-10 lg:hidden transition-all duration-300 ease-in-out bg-white",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="pb-3 space-y-1">
            <NavLink to="/" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Home</NavLink>
            <NavLink to="/homev1" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Home V1</NavLink>
            <NavLink to="/features" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Features</NavLink>
            <NavLink to="/about" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">About</NavLink>
            <NavLink to="/blog" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Blog</NavLink>
            <NavLink to="/pricing" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Pricing</NavLink>
            <NavLink to="/contact" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Contact</NavLink>
            <NavLink to="/privacypolicy" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Privacy and policy
            </NavLink>
            <NavLink to="/licenses" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Licenses
            </NavLink>
            <NavLink to="/terms" className="block py-2 text-base font-medium hover:bg-gray-50 rounded-md transition-colors">Term of services
            </NavLink>
            <NavLink to="/get-started" className="mob-menu-btn"> Get Started → </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;