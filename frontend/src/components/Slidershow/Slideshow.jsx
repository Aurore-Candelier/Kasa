import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import ArrowRight from '../../assets/arrow-right.svg';
import ArrowLeft from '../../assets/arrow-left.svg';


const Slideshow = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre la diapositive affichée

    // Fonction déclenchée lorsque l'utilisateur clique sur la flèche "précédent"
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    // Fonction déclenchée lorsque l'utlisateur clique sur la flèche "suivant"
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slides-container">
            <button className="nav-button prev" onClick={handlePrevClick}>
                <img src={ArrowLeft} alt="Previous" />
            </button>
            <ul className="slides">
                {pictures.map((item, index) => (
                    <li key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>

                        <div className="slide-image">
                            <img src={item} alt={"appartment picture"} className="slide-cover" />
                            {index === currentIndex && (
                                <div className="slide-counter">
                                    {currentIndex + 1} / {pictures.length}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <button className="nav-button next" onClick={handleNextClick}>
                <img src={ArrowRight} alt="Next" />
            </button>
        </div>
    );
};

export default Slideshow;