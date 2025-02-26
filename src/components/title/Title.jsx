import React from 'react';
import "./title.css";
import PropTypes from 'prop-types';

const Title = ({ title, color="text-primary", size = "text-6xl", fontWeight = "font-semibold", lineHeight = "leading-tight", fontFamily="font-inter", textAlign="text-center" }) => {
    return (
        <>
            <h2 className={`section-title ${size} ${color} ${fontWeight} ${lineHeight} ${fontFamily} ${textAlign}`}>
                {title ? title : "Replace with your own title."}
            </h2>
        </>
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
    textAlign: PropTypes.string ,
};

export default Title;
