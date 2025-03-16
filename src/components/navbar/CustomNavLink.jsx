import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomNavLink = ({ to, children, mobileMenu = false, setIsMobileMenuOpen }) => {
  const location = useLocation(); // Hook to get the current location

  const handleMobileMenuClose = () => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Only call if setIsMobileMenuOpen is provided
    }
  };

  // Check if the current pathname is exactly the 'to' prop
  const isActive = location.pathname === to;

  return (
    <>
      {mobileMenu ? (
        <NavLink
          onClick={handleMobileMenuClose}
          to={to}
          className={isActive ? 'font-medium text-limeGreen' : 'text-primary font-medium'}
        >
          {children}
        </NavLink>
      ) : (
        <NavLink
          to={to}
          className={isActive ? 'nav-item px-3 py-2 text-sm font-medium transition-colors block text-limeGreen' : 'nav-item px-3 py-2 text-sm font-medium transition-colors block text-primary'}
        >
          {children}
        </NavLink>
      )}
    </>
  );
};

// Prop validation
CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mobileMenu: PropTypes.bool,
  setIsMobileMenuOpen: PropTypes.func,
};

CustomNavLink.defaultProps = {
  mobileMenu: false,
  setIsMobileMenuOpen: null,
};

export default CustomNavLink;
