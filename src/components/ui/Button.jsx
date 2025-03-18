import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import { Link } from 'react-router-dom';

const Button = ({
  text = 'Button', // Default button text
  link = '/', // Default link URL
  color = 'text-primary', // Default text color
  hoverColor = 'hover:text-white', // Default hover text color
  bgColor = 'bg-lightGreen', // Default background color
  hoverBgColor = 'hover:bg-primary', // Default hover background color
  border = 'border-lightGreen', // Default border style
  hoverBorder = 'hover:border-lightGrayishWhite', // Default hover border style
  fullWidth = false // Button width
}) => {
  return (
    <Link to={link} className={`
      border px-4 py-[6px] rounded-[32px] 
      w-full text-center ${fullWidth? 'block': 'md:inline-block  md:w-fit'} 
      ${color} ${hoverColor} 
      ${bgColor} ${hoverBgColor} 
      ${border} ${hoverBorder}
      transition-all duration-300 ease-in-out
    `} >
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
  color: PropTypes.string, // Additional custom classes
  hoverColor: PropTypes.string, // Additional custom classes
  fullWidth: PropTypes.bool // Button width
};

export default Button;