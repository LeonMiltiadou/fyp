import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ merchant }) => {
    return (
        <div className="hero">
            <img src="img/logo.svg" alt="Logo" />
        </div>
    )
}

export default Hero;


Hero.propTypes = {
    merchant: PropTypes.object,
};