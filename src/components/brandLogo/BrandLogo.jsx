import PropTypes from 'prop-types'; // Import PropTypes
import "./brandLogo.css";
import Slider from '../slider/Slider';

const BrandLogo = ({ title, desc }) => {
    // Define an array of brand logo image paths
    const logos = [
        '/assets/img/brands/logo-1.png',
        '/assets/img/brands/logo-2.png',
        '/assets/img/brands/logo-3.png',
        '/assets/img/brands/logo-4.png',
        '/assets/img/brands/logo-5.png',
    ];

    return (
        <section className='brands py-12 bg-lightGrayishWhite'>
            <div className="container">
                <div className="brand-area border border-[#E9EAEB] rounded-md py-6 px-10">

                    {/* Render title if provided */}
                    {title && <h2 className='title text-center mb-8 text-2xl'>{title}</h2>}

                    {/* Brand Logo Slider */}
                    <Slider items={logos} speed={5000} />

                    {/* Render description if provided */}
                    {desc && <p className='text-center font-normal text-base mt-8'>{desc}</p>}
                </div>
            </div>
        </section>
    );
};

// Props Validation
BrandLogo.propTypes = {
    title: PropTypes.string, // Title should be a string
    desc: PropTypes.string,  // Description should be a string
};

// Default Props
BrandLogo.defaultProps = {
    title: '', // Default title is an empty string
    desc: '',  // Default description is an empty string
};

export default BrandLogo;
