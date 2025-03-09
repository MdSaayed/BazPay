import PropTypes from 'prop-types';
import React from 'react';

const Description = ({ text="text-[davyGray]", size="text-lg", color="text-davyGray",maxWidth="max-w-[694px]", textAlign="text-center mx-auto"}) => {
    return <p className={`leading-normal mt-4 ${size} ${color} ${maxWidth} ${textAlign}`}> {text} </p>;
};

Description.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string, 
    maxWidth: PropTypes.string, 
    textAlign: PropTypes.string, 
};

export default Description;