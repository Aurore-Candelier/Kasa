import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import ArrowRight from '../../assets/arrow-right.svg';
import ArrowLeft from '../../assets/arrow-left.svg';


const Slideshow = () => {
    const [data, setData] = useState([]);  // État pour stocker les données récupérées de l'API
    const [loading, setLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement
    const [error, setError] = useState(null);  // État pour stocker les erreurs s'il y en a
    const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre la diapositive affichée

    // Charge les données depuis l'API lors du montage du composant
    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            // Vérifie la réponse HTTP
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            // Traite les données JSON récupérées
            .then((data) => {
                console.log(data);  // Affiche les données reçues dans la console
                setData(data);  // Met à jour l'état 'data' avec les données récupérées
                setLoading(false);  // Indique que le chargement est terminé
            })
            // Capture les erreurs potentielles
            .catch((error) => {
                console.error('Erreur:', error);  // Affiche l'erreur dans la console
                setError(error);  // Met à jour l'état 'error' avec l'erreur capturée
                setLoading(false);  // Indique que le chargement est terminé (même en cas d'erreur)
            });
    }, []);  // Dépendance vide pour s'assurer que cet effet ne s'exécute qu'une seule fois au montage du composant

    // Condition de chargement : affiche un message pendant le chargement des données
    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    // Condition d'erreur : affiche un message d'erreur si une erreur s'est produite lors du chargement des données
    if (error) {
        return <div>Erreur: {error.message}</div>;
    }

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slides-container">
            <button className="nav-button prev" onClick={handlePrevClick}>
                <img src={ArrowLeft} alt="Previous" />
            </button>
            <ul className="slides">
                {data.map((item, index) => (
                    <li key={item.id} className={`slide ${index === currentIndex ? 'active' : ''}`}>

                        <div className="slide-image">
                            <img src={item.cover} alt={item.title} className="slide-cover" />
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