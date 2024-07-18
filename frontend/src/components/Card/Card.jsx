import React, { useState, useEffect } from 'react';
import './Card.css';


const CardList = () => {
    // États pour gérer les données et le chargement
    const [data, setData] = useState([]);  // État pour stocker les données récupérées de l'API
    const [loading, setLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement
    
    // Charge les données depuis l'API lors du montage du composant
    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            // Convertit la réponse en JSON
            .then((response) => response.json())
            // Traite les données JSON récupérées
            .then((data) => {
                setData(data);  // Met à jour l'état 'data' avec les données récupérées
                setLoading(false);  // Indique que le chargement est terminé
            })
            // Capture les erreurs potentielles
            .catch((error) => {
                console.error('Erreur:', error);  // Affiche l'erreur dans la console
                setLoading(false);  // Indique que le chargement est terminé (même en cas d'erreur)
            });
    }, []);  // Dépendance vide pour s'assurer que cet effet ne s'exécute qu'une seule fois au montage du composant

    // Condition de chargement : affiche un message pendant le chargement des données
    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="card-container">
                {data.map((item, index) => (
                    <a href= {`/house/${item.id}`} key={index} className="card">
                        <div className="card-image-wrapper">
                            <img src={item.cover} alt={item.title} className="card-cover" />
                            <h2 className="card-title">{item.title}</h2>
                        </div>
                    </a>
                ))}
        </div>
    );
}

export default CardList;