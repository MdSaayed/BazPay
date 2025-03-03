import React from 'react';
import "./title.css";
import PropTypes from 'prop-types';

const Title = ({ 
    title, 
    color = "text-primary", 
    size = "text-6xl", 
    fontWeight = "font-semibold", 
    lineHeight = "leading-tight", 
    fontFamily = "font-inter", 
    textAlign = "text-center", 
    maxWidth = "max-w-[694px]" 
}) => {
    return (
        <div className={`w-full ${textAlign === "text-center" ? "flex justify-center" : ""}`}>
            <h2 className={`section-title ${size} ${color} ${fontWeight} ${lineHeight} ${fontFamily} ${textAlign} ${maxWidth}`}>
                {title ? title : "Replace with your own title."}
            </h2>
        </div>
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
