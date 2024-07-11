import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:8080/api/properties ')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="card-container">
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="card">
                        <div className="card-image-wrapper">
                            <img src={item.cover} alt={item.title} className="card-cover" />
                            <h2 className="card-title">{item.title}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;