import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import { Link } from 'react-router-dom';

const Button = ({
  text = 'Button', // Button text
  link = '/', // Link URL
  bgColor = 'bg-blue-500', // Background color
  hoverBgColor = 'hover:bg-blue-600', // Hover background color
  border = 'border border-blue-500', // Border style
  hoverBorder = 'hover:border-blue-600', // Hover border style
  className = '', // Additional custom classes
}) => {
  return (
    <Link
      to={link}
      className={`btn-secondary block w-full text-center md:inline-block md:w-fit ${bgColor} ${hoverBgColor} ${border} ${hoverBorder} ${className}`}
    >
      {text}
    </Link>
  );
};

// Prop validation
Button.propTypes = {
  text: PropTypes.string, // Button text
  link: PropTypes.string, // Link URL
  bgColor: PropTypes.string, // Background color class
  hoverBgColor: PropTypes.string, // Hover background color class
  border: PropTypes.string, // Border class
  hoverBorder: PropTypes.string, // Hover border class
  className: PropTypes.string, // Additional custom classes
};

// Default props
Button.defaultProps = {
  text: 'Button',
  link: '/',
  bgColor: 'bg-blue-500',
  hoverBgColor: 'hover:bg-blue-600',
  border: 'border border-blue-500',
  hoverBorder: 'hover:border-blue-600',
  className: '',
};

export default Button;