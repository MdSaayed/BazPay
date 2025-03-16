import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomNavLink = ({ to, children, mobileMenu = false, setIsMobileMenuOpen }) => {
  const handleMobileMenuClose = () => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Only call if setIsMobileMenuOpen is provided
    }
  };

  return (
    <>
      {mobileMenu ? (
        <NavLink
          onClick={handleMobileMenuClose}
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'font-medium py-2 text-limeGreen'
              : 'text-primary font-medium py-2'
          }
        >
          {children}
        </NavLink>
      ) : (
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'nav-item px-3 py-2 text-sm font-medium transition-colors block text-limeGreen'
              : 'nav-item px-3 py-2 text-sm font-medium transition-colors block text-primary'
          }
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
  setIsMobileMenuOpen: null, // Set default as null instead of an empty function
};

export default CustomNavLink;
