import PropTypes from 'prop-types';
import React from 'react';

const StatItem = ({ value, suffix, label, textColor }) => {
    return (
        < >
            <div className="text-center md:text-left">
                <h3 className={`${textColor} text-4xl lg:text-5xl font-semibold`}>
                    {value}{suffix}
                </h3>
                <p className={`${textColor} opacity-90 mt-4`}>
                    {label}
                </p>
            </div>
        </ >
    );
};
  
  // PropTypes Validation  
  StatItem.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    suffix: PropTypes.string,
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string
  };;

export default StatItem;

