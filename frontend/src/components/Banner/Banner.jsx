import React from 'react';
import './Banner.css';

const Banner = ({ imgSrc, altText, text }) => {
    return (
        <div className='image-container'>
            <img src={imgSrc} alt={altText} className='background-image' />
            {text && <div className='centered-text'>{text}</div>}
        </div>
    );
};

export default Banner;