import React from 'react';
import PropTypes from 'prop-types';
import Reveal from '../../animation/Reveal';

const Description = ({ text="text-[davyGray]", size="text-lg", color="text-davyGray",maxWidth="max-w-[694px]", textAlign="text-center mx-auto"}) => {
    return (
        <>
            <Reveal>
                <p className={`leading-normal mt-4 ${size} ${color} ${maxWidth} ${textAlign}`}> {text} </p>
            </Reveal>
        </>
    )
    
};

Description.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string, 
    maxWidth: PropTypes.string, 
    textAlign: PropTypes.string, 
};

export default Description;