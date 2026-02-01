import React from 'react';
import PropTypes from 'prop-types';
import subtitleIcon from '/assets/icons/subtitle_icon.svg';  
import Reveal from '../../animation/Reveal';

const Subtitle = ({ subTitle, color, bgColor, borderColor, showIcon, align="justify-center" }) => {
    return (
        <Reveal>
            <div className={`subtitle-area flex items-center ${align? align : 'justify-center'}`}>
                <div className={`subtitle-wrapper flex items-center justify-center border ${borderColor} ${bgColor}`}>
                    {showIcon && (
                        <div className="img-wrapper">
                            <img className="subtitle-icon" src={subtitleIcon} alt="Subtitle Icon" />
                        </div>
                    )}
                    <h3 className={`subtitle ${color}`}>
                        {subTitle || "Replace with your own subtitle."}
                    </h3>
                </div>
            </div>
        </Reveal>
    );
};

// Prop validation  
Subtitle.propTypes = {
    subTitle: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    showIcon: PropTypes.bool,
    align: PropTypes.string
};

// Default Props
Subtitle.defaultProps = {
    subTitle: "Replace with your own subtitle.",
    color: "text-[#53586]", 
    bgColor: "bg-mintCream", 
    borderColor: "border-whiteSmoke",
    showIcon: true,
    align: "justify-center"
};

export default Subtitle;
