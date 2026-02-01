import React from 'react';
import PropTypes from 'prop-types';
import Reveal from '../../animation/Reveal';

const Title = ({ 
    title, 
    color = "text-primary", 
    size = "text-5xl lg:text-6xl", 
    fontWeight = "font-semibold", 
    lineHeight = "leading-snug", 
    fontFamily = "font-inter", 
    textAlign = "text-center", 
    maxWidth = "max-w-[694px]" 
}) => {

    return (
        <Reveal>
            <div className={`w-full ${textAlign === "text-center" ? "flex justify-center" : ""}`}>
                <h2 className={`section-title ${size} ${color} ${fontWeight} ${fontFamily} ${textAlign} ${maxWidth} ${lineHeight}`}>
                    {title ? title : "Replace with your own title."}
                </h2>
            </div>
        </Reveal>
    );
};

// Prop validation  
Title.propTypes = {
    title: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
    lineHeight: PropTypes.string,
    size: PropTypes.string,
    fontFamily: PropTypes.string,
    textAlign: PropTypes.string,
    maxWidth: PropTypes.string
};

export default Title;
