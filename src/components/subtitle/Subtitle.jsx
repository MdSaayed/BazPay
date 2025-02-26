import React from 'react';
import PropTypes from 'prop-types';
import subtitleIcon from '/assets/icons/subtitle_icon.svg';  
import "./subtitle.css";

const Subtitle = ({ subTitle, color="text-[#53586]", bgColor="bg-[#FBFEF7]", borderColor="border-[#F5F5F5]" }) => {

    return (
        <div className="subtitle-area flex items-center justify-center">
            <div className={`subtitle-wrapper flex items-center justify-center ${bgColor}  border ${borderColor}`}>
                <div className="img-wrapper">
                    <img className="subtitle-icon" src={subtitleIcon} alt="Subtitle Icon" />
                </div>
                <h3 className={`subtitle ${color} ${bgColor}`}>
                    {subTitle || "Replace with your own subtitle."}
                </h3>
            </div>
        </div>
    );
};

// Prop validation  
Subtitle.propTypes = {
    subTitle: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string
};

export default Subtitle;


