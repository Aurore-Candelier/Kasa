import "./House.css";
import { Collapse } from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slidershow/Slideshow";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Stars from "../../components/Stars/Stars";

function fetchHouse(param, setData, setLoading, navigate) {
    fetch('http://localhost:8080/api/properties/' + param.id)
        // Convertit la réponse en JSON
        .then((response) => {
            if(!response.ok) {
                throw new Error('ID incorrect');
            }
            return response.json();
        })
        
        .then((data) => {
            console.log(data); // Affiche toutes les données

            setData(data);  // Met à jour l'état 'data' avec les données récupérées
            setLoading(false);  // Indique que le chargement est terminé
        })
        // Capture les erreurs potentielles
        .catch((error) => {
            console.error('Erreur:', error);  // Affiche l'erreur dans la console
            setLoading(false);  // Indique que le chargement est terminé (même en cas d'erreur)
            navigate('/error'); // Redirige vers une page d'erreur en cas d'échec de la requête
        });
}

const House = () => {
    const param = useParams(); // Récupère les paramètres d'URL (notamment param.id)
    const navigate = useNavigate();  // Fonction de navigation pour naviguer vers une autre route
    const [data, setData] = useState();  // État pour stocker les données récupérées de l'API
    const [loading, setLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement

    // Effet secondaire pour charger les données de la maison lorsque param.id change
    useEffect(() => {
        if (param.id) {
            fetchHouse(param, setData, setLoading, navigate)
        }
    }, [param.id, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('etat des données:', data);

    const equipments = Array.isArray(data.equipments) && data.equipments.length > 0 ? (
        <ul>
            {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    ) : (
        <p>Aucun équipement disponible.</p>
    )

    return (
        <>
            <div className="house-container">
                <Slideshow pictures={data.pictures} />

                <div className="responsive-container">
                    <div className="title-location-tags-container">
                        <div className="house-header">
                            <div className="title-location">
                                <h1 className="house-title">{data.title}</h1>
                                <p className="house-location">{data.location}</p>
                            </div>
                        </div>                    
                        <div className="tags-container">
                            {Array.isArray(data.tags) && data.tags.length > 0 && (
                                <Tag tags={data.tags} />
                            )}
                        </div>
                    </div>
                    <div className="host-stars-container">
                        <Host name={data.host.name} picture={data.host.picture} />
                        <Stars rating={data.rating} />
                    </div>
                </div>

                <div className="collapse-house">
                    <Collapse title="Description  " content={data.description} />
                    <Collapse title="Équipement " content={equipments} />
                </div>
            </div>
        </>
    )
}

export default House;